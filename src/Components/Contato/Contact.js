import React from 'react'
import styles from './Contact.module.css'
import photo from '../../img/contato.jpg'
import { Head } from '../Head/Head'

export default function Contact() {
    return (
        <div className={`${styles.contact} animeLeft`}>
            <Head title="ecommerce | Contato" description="Entre me contato"/>
            <img src={ photo } alt="maquina de escrever"/>
            <div>
                <h1>Entre em contato</h1>
                <ul className={styles.data}>
                    <li>
                       asinhahans@gmail.com
                    </li>
                    <li>
                       (12)3456-7891
                    </li>
                    <li>
                       Rua Asinha, 1
                    </li>
                </ul>
                
            </div>
        </div>
    )
}
