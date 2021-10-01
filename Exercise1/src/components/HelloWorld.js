import React from 'react'
import styles from './NewsNotification.module.css';

export default function HelloWorld(props) {
    return (
        <div className={ styles.container}>
           <div><span className={ styles.header }> {props.topic} :</span> {props.body} </div>
        </div>
    )
}
