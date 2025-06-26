import mainStyles from "@/styles/about/team.module.css";
import Image from "next/image";
export const Team = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <h2 className={mainStyles.headerShowTablet}>THE TEAM</h2>
                <div className={mainStyles.imgContainer}>
                    <div className={mainStyles.imgCol1}>
                        <div className={mainStyles.img1}>
                            <Image className={mainStyles.img} src="/team-member.svg" alt="team member" fill />
                        </div>
                        <div className={mainStyles.img2}>
                            <Image className={mainStyles.img}  src="/team-member.svg" alt="team member" fill />
                        </div>
                    </div>
                    <div className={mainStyles.imgCol2}>
                        <div className={mainStyles.img3}>
                            <Image className={mainStyles.img}  src="/team-member.svg" alt="team member" fill />
                        </div>

                    </div>
                </div>
                <div className={mainStyles.textContainer}>
                    <div className={mainStyles.descContainer}>
                        <h2 className={mainStyles.headerShowDesktop}>THE TEAM</h2>
                        <p className={mainStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p className={mainStyles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div className={mainStyles.trustContainer}>
                        <div>
                            <div className={mainStyles.trustNum}>200</div>
                            <p className={mainStyles.trustText}>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <div className={mainStyles.trustNum}>12k</div>
                            <p className={mainStyles.trustText}>Lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <div className={mainStyles.trustNum}>98%</div>
                            <p className={mainStyles.trustText}>Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}