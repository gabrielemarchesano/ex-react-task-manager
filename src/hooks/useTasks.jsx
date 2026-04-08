import { useEffect, useState } from "react";

export default function useTasks(){
  
  const [ tasks, setTasks ] = useState([]);
  
  const url = import.meta.env.VITE_URL;

  useEffect(() => {
      fetch(`${url}/tasks`)
        .then(res => res.json())
        .then(data => setTasks(data))
        .catch(err => console.error(err))
    }, [])

  const addTask = (newTask) => {

    fetch(`${url}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(newTask)
    })
      .then(res => res.json())
      .then(data => {
        if(data.success === true){
          console.log(data.task)
          setTasks(prev => [...prev, data.task]);
        } else{
          throw new Error(data.message);
        }
      })
      .catch(err => console.error(err))
  }

  const removeTask = (taskId) => {
    fetch(`${url}/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if(data.success){
          setTasks(prev => prev.filter(task => task.id !== Number(taskId)))
        }
      })
    return;
  }

  const updateTask = () => {
    return;
  }

  return({ tasks, setTasks, addTask, removeTask, updateTask});
}