import React from 'react';
import styles from './TaskList.module.css';

function TaskList(props){
    return(
        <ul className={styles.container}>
            {props.task_list.map((item, index) => {
                return (
                    <li key={index} className={styles.item}>{item}</li>
                )
            })}
        </ul>
        
    )
}
export default TaskList;