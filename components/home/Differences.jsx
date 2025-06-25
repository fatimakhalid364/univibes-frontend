import mainStyles from '@/styles/home/differences.module.css';
import Image from 'next/image';
import { Button } from '../Button';
import buttonStyles from '@/styles/button.module.css';
export const Differences = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.headerContainer}>
                <h2 className={mainStyles.boldText}>WHAT MAKES UNIVIBE DIFFERENT?</h2>
                <p className={mainStyles.thinText}>Univibe provides ethical, personalized and student-first educational guidance.</p>
            </div>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.imgContainer}>
                    <Image className={mainStyles.img} src="/differences.png" alt="differences-pic" fill />
                </div>
                <div className={mainStyles.descContainer}>
                    <p className={mainStyles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <Button text="Learn More" className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} />
                </div>
            </div>
        </section>
    )
}