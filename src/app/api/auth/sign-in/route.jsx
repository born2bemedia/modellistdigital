import axios from "axios";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const response = await axios.post(`${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token`, {
      username: email,
      password: password,
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Authentication failed",
        error: error.response ? error.response.data.message : error.message,
      }),
      {
        status: 401,
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
