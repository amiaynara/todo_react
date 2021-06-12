import React, { useState }from 'react';
import Form from '../form/Form';
import TaskList from '../tasklist/TaskList';
import styles from './app.module.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  
  const handle_submit = (task) => {
    console.log(task);
    setTaskList(prevValue =>{
      return [...prevValue, task]
      
    });
  }
  return (
        <div className={`${styles.frame}`}>
          <Form handle_submit={handle_submit}/>
          <TaskList task_list ={taskList}/>
        </div>
  );
}

export default App;
