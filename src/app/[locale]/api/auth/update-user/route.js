import axios from "axios";

export async function POST(request) {
  const { billing } = await request.json();

  try {
    // Fetch customer ID based on email
    const fetchResponse = await axios.get(`${process.env.WC_STORE_URL}/wp-json/wc/v3/customers`, {
      params: { email: billing.email },
      auth: {
        username: process.env.WC_CONSUMER_KEY,
        password: process.env.WC_CONSUMER_SECRET,
      },
    });

    if (fetchResponse.data.length === 0) {
      return new Response(
        JSON.stringify({ message: "Customer not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const customerId = fetchResponse.data[0].id;

    // Update customer details using customer ID
    const updateResponse = await axios.put(
      `${process.env.WC_STORE_URL}/wp-json/wc/v3/customers/${customerId}`,
      { billing },
      {
        auth: {
          username: process.env.WC_CONSUMER_KEY,
          password: process.env.WC_CONSUMER_SECRET,
        },
      }
    );

    return new Response(JSON.stringify(updateResponse.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to update user data:", error.response ? error.response.data : error.message);

    return new Response(
      JSON.stringify({
        message: "Failed to update user data",
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
