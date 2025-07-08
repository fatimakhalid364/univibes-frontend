import mainStyle from '@/styles/faqs/cta.module.css'
import {Button} from '@/components/Button'
import buttonStyles from '@/styles/button.module.css';
import Image from 'next/image'
export const CTA = () =>{
    return(
        <>
            <section className={mainStyle.mainContainer}>

            <Image src="/cta-star.png" alt="Decorative star" width={80} height={80} className={mainStyle.leftStar} />
            <Image src="/cta-circles.png" alt="Decorative circles" width={250} height={250} className={mainStyle.rightCircle} />

                <div className={mainStyle.bodyContainer}>
                    <div className={mainStyle.imageContainer}>
                        <div className={mainStyle.imageWrapper}>
                             <Image className={mainStyle.image} src="/cta-image.png" alt="cta image" width={300} height={350} />
                        </div>
                       
                        <div className={mainStyle.verticalText}>
                            <span>C</span>
                            <span>o</span>
                            <span>u</span>
                            <span>n</span>
                            <span>s</span>
                            <span>e</span>
                            <span>l</span>
                            <span>l</span>
                            <span>i</span>
                            <span>n</span>
                            <span>g</span>
                        </div>

                    </div>
                    <div className={mainStyle.textContainer}>
                        <h2 className={mainStyle.heading}>STILL HAVE QUESTIONS?</h2>
                        <p className={mainStyle.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.</p>
                        <Button text="Book a free intro call" className={`${buttonStyles.button} ${buttonStyles.greenButton}`} />                           
                    </div>
                </div>
            </section>
        </>
    )
}