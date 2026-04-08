import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext";
import useTasks from "../hooks/useTasks";
import { useContext } from "react";

export default function TaskDetail(){

  const { tasks, removeTask } = useContext(GlobalContext);
  console.log(tasks)
  
  const { id } = useParams();
  //console.log(typeof(id))

  const selectedTask = tasks.find(task => task.id === Number(id))
  console.log(selectedTask)
  
  let navigate = useNavigate();

  const handleClick = async () => {
    try{
      removeTask(id);
      alert("Task eliminato");
      navigate("/");
    }
    catch(error){
      alert(error.message)
    }
  }

  return(
    <>
      <h1>Dettagli</h1>
      <h3>Nome: {selectedTask.title}</h3>
      <p>Descrizione: {selectedTask.description}</p>
      <p>Stato: {selectedTask.status}</p>
      <p>Creato il: {selectedTask.createdAt}</p>
      <button onClick={handleClick}>Elimina task</button>
    </>
  )
}