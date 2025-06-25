import mainStyles from '@/styles/home/testimonials.module.css';
import { Button } from '../Button';
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image';
export const Testimonials = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.descContainer}>
                    <div className={mainStyles.headerContainer}>
                        <h4 className={mainStyles.thinText}>TESTIMONIALS</h4>
                        <h2 className={mainStyles.boldText}>What <span className={mainStyles.boldTextSpan}>Students</span> Say</h2>
                        <span className={mainStyles.underline}></span>
                    </div>
                    <p className={mainStyles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <Button text="View All Testimonials" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonBelow768}`} />

                </div>
                <div className={mainStyles.proofContainer}>
                    <p className={mainStyles.proofText}>
                        Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quibusdam distinctio reiciendis officia aliquid.
                    </p>
                    <div className={mainStyles.proofFooter}>
                        <div className={mainStyles.profileContainer}>
                            <Image className={mainStyles.profileImg} src="/profile.svg" alt="profile" width={50} height={50} />
                            <div className={mainStyles.profileDesc}>
                                <p className={mainStyles.profileName}>Jane Doe</p>
                                <p className={mainStyles.profileRole}>Student</p>
                            </div>
                        </div>
                        <Image className={mainStyles.quoteRight} src="/quote-right.svg" alt="quote-right" width={30} height={30} />
                    </div>
                    
                </div>
                <Button text="View All Testimonials" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonAbove768}`} />

            </div>
            <span className={mainStyles.shape}>
                <p className={mainStyles.tag}>COUNSELLING</p>
            </span>
        </section>
    )
}