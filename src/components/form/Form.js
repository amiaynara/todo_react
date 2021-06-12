import React, { useState } from 'react';
import styles from './Form.module.css';

function Form(props){
    const [task, setTask] = useState('');
    const handle_submit = (event) => {
        event.preventDefault();
        props.handle_submit(task);
        setTask('');
    }

    const handleChange = (event) => {
        const new_task = event.target.value;
        setTask(new_task);
        
    }
    return (
        <form onSubmit={handle_submit} className={styles.form}>
            <input 
            onChange={handleChange}
            type="text" 
            name="task" 
            placeholder="Enter you task here..."
            value={task}
            className={styles.input}
            />
            <button type="submit" className={styles.button}>Add</button>
        </form>
    )
}

export default Form;