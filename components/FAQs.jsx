import mainStyles from '@/styles/faqs.module.css';
export const FAQs = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.headerContainer}>
                <h1 className={mainStyles.boldText}>FREQUENTLY ASKED QUESTIONS</h1>
                <p className={mainStyles.thinText}>Univibe provides ethical, personalized and student-first educational guidance.</p>
            </div>
            <div className={mainStyles.bodyContainer}>
            </div>
        </section>
    )
}