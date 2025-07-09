import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Script from 'next/script';
import { getBlogPostSchema } from '@/schemaMarkup/singleBlogPost';

export default async function Blog({ params }) {
    const { slug } = await params;
    let post;

    try {
        post = getPostBySlug(slug);
    } catch {
        return notFound();
    }
    const schema = getBlogPostSchema(post);

    const html = marked(post.content);

    return (
        <>
            <div style={{marginTop: "110px", padding: "30px"}}>
                <h1>{post.meta.title}</h1>
                <p>{post.meta.date}</p>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
            <Script
                id="blog-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </>
    );
}