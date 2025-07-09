import mainStyles from "@/styles/services/services.module.css";
import { ServiceCard } from "@/components/ServiceCard";
export const Services = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <ServiceCard src="/service1.png" text="Personalized Counseling" />
                <ServiceCard src="/service2.svg" text="University Selection" />
                <ServiceCard src="/service3.svg" text="Application Assistance" />
            </div>
        </section>
    )
}