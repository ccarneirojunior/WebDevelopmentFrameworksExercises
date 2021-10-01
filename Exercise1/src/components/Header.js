import React from 'react';
import styles from './Header.module.css'; 

export default function Header() {

     
    return (
        <div className={ styles.headerBackground}>
            <div className= {styles.container}>
                <div className={ styles.brand }>HELSINGIN SANOMAT</div>
                <div>Uutiset</div>
                <div>lehdet</div>
                <div>Tilaa</div>
                <div>Kirjadu</div>
                <div>Hae</div>
                <div>Valikko</div>
            </div>
        </div>
    )
}
