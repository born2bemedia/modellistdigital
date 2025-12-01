import axios from "axios";

export async function POST(request) {
  const { refreshToken } = await request.json();

  try {
    const response = await axios.post(
      `${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token/refresh`,
      {
        refresh_token: refreshToken,
      }
    );

    if (response.status === 200) {
      return new Response(JSON.stringify(response.data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Failed to refresh token",
        error: response.data,
      }),
      {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Failed to refresh token",
        error: error.response ? error.response.data.message : error.message,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
