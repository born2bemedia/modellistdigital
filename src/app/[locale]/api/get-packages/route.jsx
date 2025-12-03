import axios from "axios";

export async function POST(request) {
  try {
    const { category } = await request.json();

    const response = await axios.get(
      `${process.env.WC_STORE_URL}/wp-json/custom/v1/products`,
      {
        params: { category },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error.message);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch products",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
