"use client";
import mainStyle from '@/styles/faqs/accordion.module.css'
import faqs from '@/constants/faqs'
import Image from 'next/image'
import { useState } from "react";

export const Accordion = () =>{

    const [openIndex, setOpenIndex] = useState(null);
    
    const toggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

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
                        <div className={mainStyle.accordion}>
                                {faqs.map((faq, index) => (
                                    <div key={index} className={mainStyle.faqItem}>
                                        <div onClick={() => toggle(index)} className={mainStyle.questionContainer}>
                                            <p
                                                className={mainStyle.faqQuestion}
                                                
                                                aria-expanded={openIndex === index}
                                                aria-controls={`faq-answer-${index}`}
                                            >
                                                {faq.question}
                                            </p>
                                            <Image className={`${mainStyle.dropdownImg} ${openIndex === index ? mainStyle.active : ''}`} src="/dropdown.svg" alt="dropdown" width={20} height={20} />
                                        </div>
                                        <div className={`${mainStyle.answerContainer} ${openIndex === index ? mainStyle.show : ''}`}>
                                            <p
                                                className={mainStyle.faqAnswer}
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}