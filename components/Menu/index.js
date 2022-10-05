import Link from 'next/link';

import styles from './Menu.module.css';

export default function Menu() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <span className={styles.link}>
                    <Link href="/create">Cadastrar</Link>
                </span>
                <span className={styles.link}>
                    <Link href="/list">Listar</Link>
                </span>
            </nav>
        </header>
    )
}