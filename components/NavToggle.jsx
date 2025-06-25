'use client';

import {useState} from 'react';
import { IconMenu2 } from '@tabler/icons-react';
import mainStyles from '@/styles/navtoggle.module.css';
import buttonStyles from '@/styles/button.module.css';
import {Button} from './Button';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';

export const NavToggle = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    return (
        <>
            <div className={mainStyles.hamburger} onClick={toggleMenu}>
                {isOpen ? (<IconX size={28} color="#282828" />) : (<IconMenu2 size={28} color="#282828" />)}
            </div>
                <div className={`${mainStyles.mobileMenu} ${isOpen ? mainStyles.show : ''}`}>
                    <a className="link" href="/">Home</a>
                    <a className="link" href="/about">About</a>
                    <a className="link" href="#people">Services</a>
                    <a className="link" href="#why-us">FAQs</a>
                    <Button text="Book Your Call" className={`${buttonStyles.button} ${buttonStyles.primaryButton}`} />
                </div>
            </>
    )
}