import mainStyles from '@/styles/home/faqs.module.css';
import Script from 'next/script';
import { Accordian } from '@/components/Accordian';
import { faqs } from '@/constants/faqs';
import { getFAQSchema } from '@/schemaMarkup/faqs';

export const FAQs = () => {
    const schema = getFAQSchema();
    return (
        <>
            <section className={mainStyles.mainContainer}>
                <div className={mainStyles.headerContainer}>
                    <h2 className={mainStyles.boldText}>FREQUENTLY ASKED QUESTIONS</h2>
                    <p className={mainStyles.thinText}>Univibe provides ethical, personalized and student-first educational guidance.</p>
                </div>
                <div className={mainStyles.bodyContainer}>
                    <Accordian />
                </div>
            </section>
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
                }}
            />
        </>
    )
}