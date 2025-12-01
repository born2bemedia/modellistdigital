import axios from "axios";

export const getOrdersByUser = async (email) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1/orders`, {
        params: { email },
      });
  
      console.log("Full response:", response.data); // Log the full response
      if (response.data.length === 0) {
        console.warn("No orders found for the given email.");
      }
  
      console.log(response.data);
  
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch orders",
        error.response?.data || error.message
      );
      throw error;
    }
  };