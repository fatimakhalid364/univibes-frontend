import mainStyles from '@/styles/about/hero.module.css';
import Image from 'next/image';
export const Hero = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.tagsContainer}>
                    <p className={mainStyles.tag}>Blogs</p>
                    <p className={mainStyles.tag}>Featured Blogs</p>
                    <p className={mainStyles.tag}>Latest Blogs</p>
                </div>
                <div className={mainStyles.textContainer}>
                    <h1 className={mainStyles.header}>BLOGS</h1>
                    <p className={mainStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </section>
    )
}