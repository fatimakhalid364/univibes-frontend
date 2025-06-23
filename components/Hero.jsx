import mainStyles from '@/styles/hero.module.css';
import { Button } from './Button';
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';
export const Hero = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.headerContainer}>
                <div className={mainStyles.boldText}>
                    <h1>Empowering Women To Shape Their</h1> 
                    <h1>Academic Journey</h1>
                </div>
                <p className={mainStyles.thinText}>Univibe offers ethical, personalized and student-first educational guidance.</p>
                <div className={mainStyles.buttonsContainer}>
                    <Button text="Start Your Journey" className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} />
                    <Button text="Learn More" className={`${buttonStyles.button} ${buttonStyles.secondaryButton}`} />
                </div>
            </div>
            <div className={mainStyles.imgContainer}>
                <Image className={mainStyles.img} src="/video.svg" alt="hero-img" fill priority />
                <span className={mainStyles.shape1}></span>
                <span className={mainStyles.shape2}></span>
            </div>
        </section>
    )
}