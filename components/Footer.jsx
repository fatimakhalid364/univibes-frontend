import Link from "next/link";
import Image from "next/image";
import mainStyles from '@/styles/footer.module.css';
import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandPinterest,
    IconBrandTwitter,
} from '@tabler/icons-react';
export const Footer = () => {
    return (
        <section className={mainStyles.mainContainer}>
            <div className={mainStyles.bodyContainer}>
                <div className={mainStyles.logoContainer}>
                    <Image className={mainStyles.logoImg} src="/logo.png" alt="Univibes logo personalized educational guidance platform" fill priority />
                </div>
                <div className={mainStyles.linksContainer}>
                    <Link className={`link ${mainStyles.linkColor}`} href="/">Home</Link>
                    <Link className={`link ${mainStyles.linkColor}`} href="/about">About Us</Link>
                    <Link className={`link ${mainStyles.linkColor}`} href="#people">Services</Link>
                    <Link className={`link ${mainStyles.linkColor}`} href="#why-us">FAQs</Link>
                    <Link className={`link ${mainStyles.linkColor}`} href="#why-us">Resources</Link>
                    <Link className={`link ${mainStyles.linkColor}`} href="#why-us">Contact Us</Link>
                </div>
                <p className={mainStyles.footerText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className={mainStyles.socialIcons}>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebook size={24} stroke={1.5} className={mainStyles.icon} />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandInstagram size={24} stroke={1.5} className={mainStyles.icon} />
                    </Link>
                    <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandPinterest size={24} stroke={1.5} className={mainStyles.icon} />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <IconBrandTwitter size={24} stroke={1.5} className={mainStyles.icon} />
                    </Link>
                </div>
                <p className={mainStyles.copyRight}>© 2023 Univibes. All rights reserved.</p>
            </div>
        </section>
    )
}