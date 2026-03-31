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

    const addTask = () => {
      return;
    }

    const removeTask = () => {
      return;
    }

    const updateTask = () => {
      return;
    }

  return({ tasks, setTasks, addTask, removeTask, updateTask});
}