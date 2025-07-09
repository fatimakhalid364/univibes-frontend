import { faqs } from "@/constants/faqs";

export const getFAQSchema = () => ({
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
});