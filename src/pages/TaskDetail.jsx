import { useNavigate, useParams } from "react-router-dom"
import { GlobalContext } from "../context/GlobalContext";
import useTasks from "../hooks/useTasks";
import { useContext, useState } from "react";
import Modal from "../components/Modal";
import EditTaskModal from "../components/EditTaskModal";

export default function TaskDetail(){

  const { id } = useParams();
  console.log(typeof(id));
  const { tasks, removeTask, updateTask } = useContext(GlobalContext);
  console.log(tasks);
  
  const [ showDeleteModal, setShowDeleteModal ] = useState(false);
  const [ showEditModal, setShowEditModal ] = useState(false);
  const navigate = useNavigate();

  const selectedTask = tasks?.find(task => task.id === Number(id));
  console.log(selectedTask)

  if (!selectedTask) {
    return <h2>Caricamento o Task non trovata...</h2>;
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
      <button onClick={() => setShowDeleteModal(true)}>Elimina task</button>
      <button onClick={() => setShowEditModal(true)}>Modifica task</button>

      <Modal
        title={"Sicuro di voler eliminare la task?"}
        content={selectedTask.title}
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleClick}
      />
      
      <EditTaskModal 
        show={showEditModal} 
        onClose={() => setShowEditModal(false)}
        task={selectedTask}
        onSave={updateTask}
      />
    </>
  )
}