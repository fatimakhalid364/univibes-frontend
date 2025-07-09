import { getFeaturedPostsMeta } from "@/lib/posts";
import mainStyles from "@/styles/blogs/featured.module.css";
import Image from "next/image";
import Link from "next/link";

export const Featured = async() => {
    const featuredPostsMeta = await getFeaturedPostsMeta()
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.leftSection}>
                    <div className={mainStyles.imgContainer}>
                        <Image className={mainStyles.img} src="/featured-1.svg" alt="blog-img" fill />
                    </div>
                    <Link  className="link" href={`/blog/${featuredPostsMeta[0].slug}`}>
                        <h3 className={`${mainStyles.leftSecBlogTitle} ${mainStyles.truncateText}`}>{featuredPostsMeta[0].title}</h3>
                    </Link>
                    <div className={mainStyles.leftSecAuthDateContainer}>
                        <p className={mainStyles.leftSecMetaText}>{featuredPostsMeta[0].author}</p>
                        <p className={mainStyles.leftSecMetaText}>{featuredPostsMeta[0].date}</p>
                    </div>
                </div>
                <div className={mainStyles.rightSection}>
                    <h2 className={mainStyles.header}>Featured Articles</h2>
                    {
                        featuredPostsMeta.slice(1).map((post) => (
                            <div className={mainStyles.rightSecBlogCard} key={post.slug}>
                                <div className={mainStyles.rightSecImgContainer}>
                                    <Image className={mainStyles.img} src={post.image} alt="blog-img" fill />
                                </div>
                                <div className={mainStyles.rightSecMetaContainer}>
                                    <Link className="link" href={`/blog/${post.slug}`}>
                                        <p className={`${mainStyles.rightSecBlogTitle} ${mainStyles.truncateText}`}>{post.title}</p>
                                    </Link>
                                    <div className={mainStyles.rightSecAuthDateContainer}>
                                        <p className={mainStyles.leftSecMetaText}>{featuredPostsMeta[0].author}</p>
                                        <p className={mainStyles.leftSecMetaText}>{featuredPostsMeta[0].date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}