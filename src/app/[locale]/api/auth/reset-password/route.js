import mysql from "mysql2/promise";
import { hashPassword } from "@/utils/hashPassword";

export async function POST(request) {
  const { email, token, newPassword } = await request.json();

  try {
    // Connect to MySQL database
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Verify the token
    const [rows] = await connection.execute(
      `SELECT reset_token, reset_expiry FROM wp_users WHERE user_email = ?`,
      [email]
    );

    if (rows.length === 0 || rows[0].reset_token !== token || rows[0].reset_expiry < Date.now()) {
      throw new Error("Invalid or expired token.");
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update the user's password
    await connection.execute(
      `UPDATE wp_users SET user_pass = ?, reset_token = NULL, reset_expiry = NULL WHERE user_email = ?`,
      [hashedPassword, email]
    );

    await connection.end();

    return new Response(JSON.stringify({ message: "Password updated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to change password:", error);

    return new Response(
      JSON.stringify({
        message: "Failed to change password",
        error: error.message,
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
