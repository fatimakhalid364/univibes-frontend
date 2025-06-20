import mainStyles from "@/styles/services.module.css";
import { ServiceCard } from "./ServiceCard";
export const Services = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.headerContainer}>
                <h1 className={mainStyles.boldText}>OUR SERVICES</h1>
                <p className={mainStyles.thinText}>Univibe provides ethical, personalized and student-first educational guidance.</p>
            </div>
            <div className={mainStyles.bodyContainer}>
                <ServiceCard src="/service1.png" text="Personalized Counseling" />
                <ServiceCard src="/service2.svg" text="University Selection" />
                <ServiceCard src="/service3.svg" text="Application Assistance" />
            </div>
            <span className={mainStyles.shape}>
                <p className={mainStyles.tag}>COUNSELLING</p>
            </span>
        </section>
    )
}