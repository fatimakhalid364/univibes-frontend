import {baseUrl} from '@/constants/urls'
export const getBlogPostSchema = (post) => ({
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
        "url": "https://yourdomain.com/logo.png"
        }
    },
    "datePublished": post.date,
    "dateModified": post.lastUpdated || post.date,
    "description": post.excerpt,
    "url": `${baseUrl}/blog/${post.slug}`,
    "mainEntityOfPage": `${baseUrl}/blog/${post.slug}`
});
