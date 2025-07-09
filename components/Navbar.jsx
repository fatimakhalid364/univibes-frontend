import Link from 'next/link';
import Image from 'next/image';
import mainStyles from '@/styles/navbar.module.css';
import buttonStyles from '@/styles/button.module.css';
import { NavToggle } from './NavToggle';
import { Button } from './Button';
import Script from 'next/script';
import { Organization } from 'schema-dts';

export const Navbar = () => {

    return (
        <nav className={mainStyles.navContainer}>
            <div className={mainStyles.navbar}>
                <div className={mainStyles.logoContainer}>
                    <Image className={mainStyles.logoImg} src="/logo.png"  alt="Univibes logo personalized educational guidance platform" fill priority />
                </div>
                <div className={mainStyles.navLinks}>
                    <Link className="link" href="/">Home</Link>
                    <Link className="link" href="/about">About</Link>
                    <Link className="link" href="/services">Services</Link>
                    <Link className="link" href="/faqs">FAQs</Link>
                    <Link className="link" href="/blogs">Blogs</Link>
                </div>

                <Button text="Book Your Call" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonBelow768}`} />
                <NavToggle />
            </div>
        </nav>
    );
};
