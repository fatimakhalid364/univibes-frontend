import mainStyle from '@/styles/faqs/hero.module.css'
import Image from 'next/image'
export const Hero = () =>{
    return(
        <>

            <section className={mainStyle.mainContainer}>
                <div className={mainStyle.content}>
                    <h1 className={mainStyle.heading}>FAQs.</h1>
                    <p className={mainStyle.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.</p>
                </div>
                <div className={mainStyle.imageContainer}>
                    <Image src="/faqs-hero.jpg" alt="Hero" layout="fill" objectFit="cover" />
                </div>
            </section>
            
        </>
    )
}