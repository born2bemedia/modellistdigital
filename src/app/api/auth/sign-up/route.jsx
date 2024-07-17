import axios from "axios";

export async function POST(request) {
  const { email, password, firstName, lastName, phone } = await request.json();

  try {
    // Create a new customer
    const response = await axios.post(
      `${process.env.WC_STORE_URL}/wp-json/wc/v3/customers`,
      {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        username: email,
        billing: {
          phone: phone,
        },
      },
      {
        auth: {
          username: process.env.WC_CONSUMER_KEY,
          password: process.env.WC_CONSUMER_SECRET,
        },
      }
    );

    if (response.status === 201) {
      // Authenticate the newly created user
      const authResponse = await axios.post(`${process.env.WC_STORE_URL}/wp-json/jwt-auth/v1/token`, {
        username: email,
        password: password,
      });

      return new Response(JSON.stringify(authResponse.data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({
        message: "Registration failed",
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
        message: "Registration failed",
        error: error.response ? error.response.data.message : error.message,
      }),
      {
        status: 400,
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
