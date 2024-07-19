import axios from "axios";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    console.log(`Authenticating user: ${email}`);

    // Authenticate the user
    const authResponse = await axios.post(`${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token`, {
      username: email,
      password: password,
    });

    const { token, user_email, user_nicename, user_display_name } = authResponse.data;

    console.log(`Authenticated user: ${email}`);

    // Fetch user data from WooCommerce
    const userResponse = await axios.get(`${process.env.WC_STORE_URL}/wp-json/wc/v3/customers`, {
      params: {
        email: user_email,
      },
      auth: {
        username: process.env.WC_CONSUMER_KEY,
        password: process.env.WC_CONSUMER_SECRET,
      },
    });

    const user = userResponse.data.length ? userResponse.data[0] : null;

    // Include billing data in the response
    const userData = {
      token,
      user_email,
      user_nicename,
      user_display_name,
      billing: user ? user.billing : {},
    };

    console.log(`Fetched user data for: ${email}`);

    return new Response(JSON.stringify(userData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Authentication failed for user: ${email}`, error.message);
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
