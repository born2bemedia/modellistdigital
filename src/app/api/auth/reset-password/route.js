import axios from "axios";
import mysql from 'mysql2/promise';

export async function POST(request) {
  const { email, token, newPassword } = await request.json();

  try {
    console.log('Received reset password request', { email, token });

    // Verify the token in the WordPress database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [rows] = await connection.execute(
      `SELECT reset_token, reset_expiry FROM wp_users WHERE user_email = ?`,
      [email]
    );

    if (rows.length === 0) {
      console.log('No user found with email:', email);
      throw new Error("Invalid or expired token.");
    }

    const tokenData = rows[0];
    console.log('Token data from database:', tokenData);

    if (tokenData.reset_token !== token || tokenData.reset_expiry < Date.now()) {
      console.log('Token mismatch or expired:', { token, expiry: tokenData.reset_expiry, currentTime: Date.now() });
      throw new Error("Invalid or expired token.");
    }

    // Authenticate the user with the current password
    const authResponse = await axios.post(`${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token`, {
      username: email,
      password: "dummy", // Use a dummy password since the user is authenticated via token
    });

    const { data } = authResponse;

    // Update the user's password using the authenticated token
    const updateResponse = await axios.post(
      `${process.env.WC_STORE_URL}/wp-json/wp/v2/users/me`,
      { password: newPassword },
      {
        headers: {
          Authorization: `Bearer ${data.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Remove the token after successful password change
    await connection.execute(
      `UPDATE wp_users SET reset_token = NULL, reset_expiry = NULL WHERE user_email = ?`,
      [email]
    );

    console.log('Password updated successfully for user:', email);

    return new Response(JSON.stringify(updateResponse.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to change password:", error.response ? error.response.data : error.message);

    return new Response(
      JSON.stringify({
        message: "Failed to change password",
        error: error.response ? error.response.data.message : error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
