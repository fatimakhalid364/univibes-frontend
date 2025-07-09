export const getBlogListSchema = (posts) => {
    const baseUrl = process.env.BASE_URL;
    return {
        "@context": "https://schema.org",
        "@type": "Blog",
        "blogPosts": posts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "image": post.image, 
            "author": {
                "@type": "Person",
                "name": post.author
            },
            "datePublished": post.date, 
            "url": `${baseUrl}/blog/${post.slug}`,
            "description": post.excerpt || "", 
        }))
    };
};
