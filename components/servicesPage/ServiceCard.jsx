import Image from "next/image"
import mainStyles from '@/styles/servicesPage/serviceCard.module.css';
export const ServiceCard = ({src, text}) => {
    return (
            <div className={mainStyles.cardContainer}>
                <div className={mainStyles.imgContainer}>
                    <Image className={mainStyles.img} src={src} alt="card-pic" fill />
                </div>
                <h4 className={mainStyles.text}>{text}</h4>
            </div>
    )
}