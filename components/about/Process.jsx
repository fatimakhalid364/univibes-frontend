import mainStyles from "@/styles/about/process.module.css";
import Image from "next/image";
import { Button } from "../Button";
import buttonStyles from "@/styles/button.module.css"
export const Process = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.headerContainer}>
                <h2>OUR PROCESS</h2>
            </div>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.row1}>
                    <div className={mainStyles.row1col1}>
                        <div className={mainStyles.row1col1content}>
                            <Image className={mainStyles.numImg} src="/pointer-1.svg" alt="pointer" width={40} height={120} />
                            <div className={mainStyles.row1colTextContainer}>
                                <h3 className={mainStyles.heading3}>TELL US ABOUT YOURSELF</h3>
                                <p className={mainStyles.para}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={mainStyles.row2col2}>
                        <div className={mainStyles.row2col2content}>
                            <Image className={mainStyles.numImg} src="/pointer-2.svg" alt="pointer" width={40} height={120} />
                            <div className={mainStyles.row1colTextContainer}>
                                <h3 className={mainStyles.heading3}>TELL US ABOUT YOURSELF</h3>
                                <p className={mainStyles.para}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={mainStyles.row1}>
                    <div className={mainStyles.row1col1}>
                        <div className={mainStyles.row1col1content}>
                            <Image className={mainStyles.numImg} src="/pointer-3.svg" alt="pointer" width={40} height={120} />
                            <div className={mainStyles.row1colTextContainer}>
                                <h3 className={mainStyles.heading3}>TELL US ABOUT YOURSELF</h3>
                                <p className={mainStyles.para}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={mainStyles.row2col2}>
                        <div className={mainStyles.row2col2content}>
                            <Image className={mainStyles.numImg} src="/pointer-4.svg" alt="pointer" width={40} height={120} />
                            <div className={mainStyles.row1colTextContainer}>
                                <h3 className={mainStyles.heading3}>TELL US ABOUT YOURSELF</h3>
                                <p className={mainStyles.para}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span className={mainStyles.shape1}>
                <p className={mainStyles.tag}>COUNSELLING</p>
            </span>
            <span className={mainStyles.shape2}>
                <p className={mainStyles.tag}>COUNSELLING</p>
            </span>
            <div className={mainStyles.buttonContainer}>
                <Button text="Get Started" className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} />
            </div>
        </section>
    )
}