import React,{ useState } from 'react'

export default function App() {

  const [tasks,setTasks] = useState([]);
  const [newTask , setNewTask] = useState("");

  function onChangeHandle(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    const exists = tasks.includes(newTask);
      if(exists){
        window.alert("the task is already registered!!");
      } else {
        if (newTask.trim() !== '') {
          setTasks((t) => [...t, newTask]);
          setNewTask('');
        }
      }
    }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className='todo-container'>
      <h1 className='heading'>To-Do-List</h1>
      <div className='task-input'>
        <input type='text' placeholder='Enter a task...' value={newTask} onChange={onChangeHandle}/>
        <button  className='add' onClick={()=>addTask()}>Add</button>
      </div>

      <ul>
        { tasks.map((task,index) => 
                    <li key={index}>
                      <span className='text'>{task}</span>
                      <button className='delete-button' onClick={()=>deleteTask(index)}>Delete</button>
                      <button className='moveUp' onClick={()=>moveTaskUp(index)}>⬆️</button>
                      <button className='moveDown' onClick={()=>moveTaskDown(index)}>⬇️</button>
                    </li>
        )
        }
        </ul>
    </div>
  )
}
