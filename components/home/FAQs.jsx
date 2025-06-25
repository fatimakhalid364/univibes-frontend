import mainStyles from '@/styles/home/faqs.module.css';
import Script from 'next/script';
import { Accordian } from './Accordian';

export const FAQs = () => {
    const faqs = [
    {
        question: "What is Univibe?",
        answer: "Univibe is a personalized educational guidance platform.",
    },
    {
        question: "Is Univibe free to use?",
        answer: "Yes, Univibe offers free access to students.",
    },
    {
        question: "Who can use Univibe?",
        answer: "Univibe is designed for students, parents, and education advisors seeking trustworthy career guidance.",
    },
    {
        question: "Does Univibe offer one-on-one guidance?",
        answer: "Yes, students can schedule one-on-one sessions with certified counselors and mentors.",
    },
    {
        question: "Can I find career options based on my interests?",
        answer: "Absolutely. Univibe uses smart profiling to match you with careers and study paths that suit your strengths and preferences.",
    },
    {
        question: "Is my personal data safe on Univibe?",
        answer: "Yes, we prioritize your privacy and ensure that your data is encrypted and never shared without consent.",
    },
    {
        question: "Does Univibe support international study guidance?",
        answer: "Yes, Univibe provides guidance for studying abroad, including application help and scholarship insights.",
    },
    {
        question: "How do I get started with Univibe?",
        answer: "Simply sign up for a free account, complete your profile, and start exploring tailored guidance options.",
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
        }
    }))
};
    return (
        <>
            <section className={mainStyles.mainContainer}>
                <div className={mainStyles.headerContainer}>
                    <h2 className={mainStyles.boldText}>FREQUENTLY ASKED QUESTIONS</h2>
                    <p className={mainStyles.thinText}>Univibe provides ethical, personalized and student-first educational guidance.</p>
                </div>
                <div className={mainStyles.bodyContainer}>
                    <Accordian faqs={faqs} />
                </div>
            </section>
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    )
}