'use client';

import {useState} from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import mainStyles from '@/styles/navtoggle.module.css';
import buttonStyles from '@/styles/button.module.css';
import {Button} from './Button';
import Link from 'next/link';

export const NavToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    return (
        <>
            <div className={mainStyles.hamburger} onClick={toggleMenu}>
                <IconMenu2 size={28} color="#303249" />
            </div>
                <div className={`${mainStyles.mobileMenu} ${isOpen ? mainStyles.show : ''}`}>
                    <a className="link" href="#home">Home</a>
                    <a className="link" href="#about">About</a>
                    <a className="link" href="#people">Services</a>
                    <a className="link" href="#why-us">FAQs</a>
                    <Button text="Book Your Call" className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} />
                </div>
            </>
    )
}