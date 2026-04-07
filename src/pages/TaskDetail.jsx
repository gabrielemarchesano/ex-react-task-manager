import { useParams } from "react-router-dom"
import { useGlobalProvider } from "../context/GlobalContext";

export default function TaskDetail(){

  const { tasks } = useGlobalProvider();
  console.log(tasks)
  
  const { id } = useParams();
  //console.log(typeof(id))

  const selectedTask = tasks.find(task => task.id === Number(id))
  console.log(selectedTask)

  const handleClick = () => {
    console.log("Elimino task")
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