import mainStyles from "@/styles/blogs/latest.module.css";
import { getAllPostsMetaSorted } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

export const Latest = async() => {
    const posts = await getAllPostsMetaSorted();
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.headerContainer}>
                    <h2 className={mainStyles.header}>Latest Articles</h2>
                    <hr className={mainStyles.horizontalLine}/>
                </div>
                <div className={mainStyles.blogGrid}>
                    {
                        posts.map((post) => (
                            <div className={mainStyles.blogCard} key={post.slug}>
                                <div className={mainStyles.imgContainer}>
                                    <Image className={mainStyles.img} src="/featured-1.svg" alt="blog-img" fill />
                                </div>
                                <Link  className="link" href={`/blog/${post.slug}`}>
                                    <h4 className={`${mainStyles.blogTitle} ${mainStyles.truncateText}`}>{post.title}</h4>
                                </Link>
                                <div className={mainStyles.authDateContainer}>
                                    <p className={mainStyles.metaText}>{post.author}</p>
                                    <p className={mainStyles.metaText}>{post.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}