import React from 'react'
import styles from './SmallerNewsHolder.module.css'

export default function SmallerNewsHolder(props) {
    return (
        <div className={ styles.container}>
           <div><span className={ styles.header }> {props.topic} </span> 
           {props.body} </div>
        </div>
    )
}
