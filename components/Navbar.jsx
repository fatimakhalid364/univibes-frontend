import Link from 'next/link';
import Image from 'next/image';
import mainStyles from '@/styles/navbar.module.css';
import buttonStyles from '@/styles/button.module.css';
import { NavToggle } from './NavToggle';
import { Button } from './Button';

export const Navbar = () => {
    return (
        <nav className={mainStyles.navContainer}>
            <div className={mainStyles.navbar}>
                <div className={mainStyles.logoContainer}>
                    <Image className={mainStyles.logoImg} src="/logo.png" alt="app-logo" fill />
                </div>
                <div className={mainStyles.navLinks}>
                    <Link className="link" href="#home">Home</Link>
                    <Link className="link" href="#about">About</Link>
                    <Link className="link" href="#people">Services</Link>
                    <Link className="link" href="#why-us">FAQs</Link>
                </div>

                <Button text="Book Your Call" className={`${buttonStyles.button} ${buttonStyles.primaryButton} ${buttonStyles.hideButtonBelow768}`} />
                <NavToggle />
            </div>
        </nav>
    );
};
