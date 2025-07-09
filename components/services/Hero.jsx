import Image from 'next/image'
import mainStyles from '@/styles/services/hero.module.css';

export const Hero = () => {
    return (
        <>
            <section className={mainStyles.mainContainer}>
                <div className={mainStyles.imgContainer}>
                    <Image className={mainStyles.img} src="/Hero-banner.png" alt="hero-img" fill priority />
                </div>
            
                <div className={mainStyles.overlay}>
                    <div className={mainStyles.banner}>
                        <h1 className={mainStyles.mainHeading}>SERVICES</h1>
                        <p className={mainStyles.mainText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.
                        </p>
                    </div>
                </div>
                <span className={mainStyles.shape}>
                    <p className={mainStyles.tag}>COUNSELLING</p>
                </span>
            </section>
        </>
    )
}