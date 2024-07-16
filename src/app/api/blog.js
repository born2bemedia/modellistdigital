const apiUrl = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/wp-json/custom/v1`;

export async function getPosts() {
    const response = await fetch(`${apiUrl}/posts`);
    const data = await response.json();
    
    return data; 
} 

export async function getPost(slug) {
    const posts = await getPosts();
    const post = posts.find((insight) => insight.slug === slug);
    //console.log(insight);
    return post;
}