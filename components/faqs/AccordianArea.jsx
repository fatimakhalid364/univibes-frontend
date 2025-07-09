import mainStyle from '@/styles/faqs/accordion.module.css'
import { Accordian } from '@/components/Accordian';
import { getFAQSchema } from '@/schemaMarkup/faqs';
import Script from 'next/script';

export const AccordionArea = () =>{
    const schema = getFAQSchema();
    return(
        <>
            <section className={mainStyle.mainContainer}>
                <div className={mainStyle.bodyContainer}>
                    <div className={mainStyle.sidebarContainer}>
                        <div className={mainStyle.sidebar}>
                            <h2 className={mainStyle.heading}>Why it Matters</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className={mainStyle.accordionContainer}>
                        <Accordian />
                    </div>
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