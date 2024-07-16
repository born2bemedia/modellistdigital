const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1`;

export async function fetchProductsByCategory(category, quantity = 3) {
    try {
        const response = await fetch(`${apiUrl}/products?category=${category}&quantity=${quantity}`);
        if (!response.ok) {
            throw new Error(`Error fetching products: ${response.statusText}`);
        }
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Failed to fetch products by category:', error);
        throw error;
    }
}


export async function fetchProductBySlug(slug) {
    try {
        const response = await fetch(`${apiUrl}/product?slug=${slug}`);
        if (!response.ok) {
            throw new Error(`Error fetching product: ${response.statusText}`);
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Failed to fetch product by slug:', error);
        throw error;
    }
}