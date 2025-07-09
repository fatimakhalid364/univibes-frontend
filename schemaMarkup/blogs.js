import {baseUrl} from '@/constants/urls'

export const getBlogListSchema = (posts) => ({
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
});
