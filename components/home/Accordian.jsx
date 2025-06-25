"use client";
import { useState } from "react";
import mainStyles from "@/styles/home/accordian.module.css";
import Image from "next/image";
export const Accordian = ({faqs}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
    <div className={mainStyles.accordion}>
        {faqs.map((faq, index) => (
            <div key={index} className={mainStyles.faqItem}>
                <div onClick={() => toggle(index)} className={mainStyles.questionContainer}>
                    <p
                        className={mainStyles.faqQuestion}
                        
                        aria-expanded={openIndex === index}
                        aria-controls={`faq-answer-${index}`}
                    >
                        {faq.question}
                    </p>
                    <Image className={`${mainStyles.dropdownImg} ${openIndex === index ? mainStyles.active : ''}`} src="/dropdown.svg" alt="dropdown" width={20} height={20} />
                </div>
                <div className={`${mainStyles.answerContainer} ${openIndex === index ? mainStyles.show : ''}`}>
                    <p
                        className={mainStyles.faqAnswer}
                    >
                        {faq.answer}
                    </p>
                </div>
            </div>
        ))}
    </div>
    );
}