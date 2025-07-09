export const getBlogPostSchema = (post) => {
    const baseUrl = process.env.BASE_URL;

    return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Univibe",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/logo.png`  // ✅ dynamic logo URL
            }
        },
        "datePublished": post.date,
        "dateModified": post.lastUpdated || post.date,
        "description": post.excerpt,
        "url": `${baseUrl}/blog/${post.slug}`,
        "mainEntityOfPage": `${baseUrl}/blog/${post.slug}`
    };
};