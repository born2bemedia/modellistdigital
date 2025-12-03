import axios from "axios";

export async function POST(request) {
  const { email, currentPassword, newPassword } = await request.json();

  try {
    // Authenticate the user with the current password
    const authResponse = await axios.post(`${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token`, {
      username: email,
      password: currentPassword,
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

export async function GET(request) {
  return new Response(JSON.stringify({ message: "Method not allowed" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}
