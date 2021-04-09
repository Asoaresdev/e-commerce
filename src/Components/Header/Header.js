import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
    return (
        <nav className={styles.header}>
            <ul>
                <li>
                    <NavLink 
                        activeClassName={styles.selected} 
                        className={styles.link} 
                        to="/" end
                    >
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        activeClassName={styles.selected} 
                        className={styles.link} 
                        to="/contato"
                    >
                        Contato
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
