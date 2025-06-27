import mainStyles from '@/styles/servicesPage/description.module.css'

export const Description = () => {
    return (
        <>
           <section className={mainStyles.mainContainer}>
                <div className={mainStyles.bodyContainer}>
                    <div className={mainStyles.headingContainer}>
                        <h3 className={mainStyles.mainHeading}>Tailored services to empower your academic journey.</h3>
                    </div>
                    <div className={mainStyles.textContainer}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed justo nec augue convallis tincidunt.  </p>
                    </div>
                </div>
                <span className={mainStyles.shape}>
                    <p className={mainStyles.tag}>COUNSELLING</p>
                </span>
           </section>
        </>
    )
}
