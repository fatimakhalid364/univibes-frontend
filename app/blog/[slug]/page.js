import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { marked } from 'marked';

export default async function Blog({ params }) {
    const { slug } = await params;
    let post;

    try {
        post = getPostBySlug(slug);
    } catch {
        return notFound();
    }

    const html = marked(post.content);

    return (
        <div style={{marginTop: "110px", padding: "30px"}}>
            <h1>{post.meta.title}</h1>
            <p>{post.meta.date}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}