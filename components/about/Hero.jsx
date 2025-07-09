import mainStyles from '@/styles/about/hero.module.css';
import Image from 'next/image';
export const Hero = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.tagsContainer}>
                    <p className={mainStyles.tag}>About us</p>
                    <p className={mainStyles.tag}>The team</p>
                    <p className={mainStyles.tag}>Our mission</p>
                </div>
                <div className={mainStyles.textContainer}>
                    <h1 className={mainStyles.header}>ABOUT US</h1>
                    <p className={mainStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p className={mainStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className={mainStyles.imgContainer}>
                <Image className={mainStyles.img} src="/group-work.svg" alt="hero-img" fill priority />
                <span className={mainStyles.shape1}>
                    <p className={`${mainStyles.imgTag} ${mainStyles.imgTag2}`}>TEAM WORK</p>
                </span>
                <span className={mainStyles.shape2}>
                    <p className={mainStyles.imgTag}>TEAM WORK</p>
                </span>
            </div>
        </section>
    )
}