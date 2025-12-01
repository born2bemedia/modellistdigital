// src/app/api/orders/route.js
export async function POST(request) {
    const orderData = await request.json();
  
    try {
      const response = await fetch(`${process.env.WC_STORE_URL}/wp-json/wc/v3/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(`${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`).toString('base64')}`
        },
        body: JSON.stringify(orderData)
      });
  
      if (response.ok) {
        const order = await response.json();
        return new Response(JSON.stringify(order), { status: 200 });
      } else {
        const errorData = await response.json();
        return new Response(JSON.stringify(errorData), { status: response.status });
      }
    } catch (error) {
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
  }
  