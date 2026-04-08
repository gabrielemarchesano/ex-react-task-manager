import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext";
import useTasks from "../hooks/useTasks";
import { useContext, useState } from "react";
import Modal from "../components/Modal";

export default function TaskDetail(){

  const { tasks, removeTask } = useContext(GlobalContext);
  console.log(tasks)
  
  const { id } = useParams();
  //console.log(typeof(id))

  const selectedTask = tasks.find(task => task.id === Number(id))
  console.log(selectedTask)

  const [ showModal, setShowModal ] = useState(false);
  
  let navigate = useNavigate();

  function showModalFunction(){
    setShowModal(true)
    console.log(showModal)
  }

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
      <button onClick={showModalFunction}>Elimina task</button>

      <Modal
        title={"Sicuro di voler eliminare la task?"}
        content={selectedTask.title}
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleClick}
      />
    </>
  )
}