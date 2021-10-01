import React from 'react'
import styles from './BiggerNewsHolder.module.css'; 

export default function BiggerNewsHolder(props) {
    return (
        
        <div className={ styles.container}>
           
           <div><span className={ styles.header }> {props.topic} :</span> <div className ={styles.photo}></div>{props.body} </div>
           
        </div>
        
    )
}
