import mainStyles from '@/styles/services/features.module.css'
import Image from 'next/image';
import {Button} from '@/components/Button'
import buttonStyles from '@/styles/button.module.css';

export const Features = () => {
    return (
        <>
            <section className={mainStyles.mainContainer}>
                <div className={mainStyles.bodyContainer}>
                    <div className={mainStyles.allFeaturesContainer}>
                        <div className={mainStyles.featureContainer}>
                            <div className={mainStyles.iconContainer}>
                                <Image src="/feature-1.png" alt="features-image"  width={35} height={35} style={{ padding: '20px' }} />
                            </div> 
                            <div className={mainStyles.descriptionContainer}>
                                <h3 className={mainStyles.subHeading}>Skill-Building Sessions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div> 
                            
                        </div>
                        <div className={mainStyles.featureContainer}>
                            <div className={mainStyles.iconContainer}>
                                <Image src="/feature-2.png" alt="features-image"  width={35} height={35} style={{ padding: '20px' }} />                            
                            </div> 
                            <div className={mainStyles.descriptionContainer}>
                                <h3 className={mainStyles.subHeading}>Academic Subject Selection</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div> 
                            
                        </div>
                        <div className={mainStyles.featureContainer}>
                            <div className={mainStyles.iconContainer}>
                                <Image src="/feature-3.png" alt="features-image"  width={35} height={35} style={{ padding: '20px' }} />                            
                            </div> 
                            <div className={mainStyles.descriptionContainer}>
                                <h3 className={mainStyles.subHeading}>Skill-Building Sessions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div> 
                            
                        </div>
                        <Button text=" Plan your Future today!" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonBelow768}`} />
                    </div>
                    <div className={mainStyles.imageContainer}>
                        <Image src="/kids.png" alt="features-image"  width={800} height={500} style={{ width: '100%', height: 'auto' ,background: '#F9F6FE'}} />
                        <Button text=" Plan your Future today!" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonAbove768}`} />
                      
                            <div className={mainStyles.banner}>

                            </div>
                        
                    </div> 

                </div>
           </section>

        </>
    )
}
