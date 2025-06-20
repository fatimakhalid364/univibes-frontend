import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
export const Button = ({text, className}) => {
    return (
        <div className={className}>
                <Link className="link" href="/signup">{text}</Link>
        </div>
    )
}