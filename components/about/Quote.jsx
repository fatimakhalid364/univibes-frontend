import mainStyles from '@/styles/about/quote.module.css';
import Image from 'next/image';
export const Quote = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.descContainer}>
                    <Image src="/open-quote.svg" alt="open-quote" width={20} height={20}/>
                    <p className={mainStyles.descText}>
                        UniVibe empowers students by redifinng <span className={mainStyles.span}>education</span> with integrity and purpose.
                    </p>
                    <Image className={mainStyles.closeQuote} src="/close-quote.svg" alt="close-quote" width={20} height={20}/>
                </div>
                <div className={mainStyles.imgContainer}>
                    <Image className={mainStyles.img} src="/consultation.svg" alt="cosultation-pic" fill />
                </div>
            </div>
        </section>
    )
}