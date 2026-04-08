import { useContext, useEffect, useMemo, useRef, useState } from "react"
import useTasks from "../hooks/useTasks";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTask(){

  const [ title, setTitle ] = useState("");
  const descriptionRef = useRef();
  const statusRef = useRef();
  const { addTask } = useContext(GlobalContext)

  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const isTitleValid = useMemo(() => {
    if(title.split("").some(char => symbols.includes(char))){
      return false;
    }
    return true;
    }, [title])
  
  function resetForm(){
    setTitle("");
    document.getElementById("add-task-form").reset();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(title.trim().length === 0){
      alert("Campo vuoto");
      return;
    }

    const description = descriptionRef.current.value;
    const status = statusRef.current.value;

    const newTask = {
      title,
      description,
      status
    }

    console.log(`
      Submit del form`, newTask
    )
    
    try{
      await addTask(newTask);
      console.log(addTask)
    
      alert("Il task è stato creato");
    
      resetForm();
    }
    catch(error){
      alert(error.message)
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit} id="add-task-form">
        <div>
          <label htmlFor="title">Titolo</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Nome del task"
            />
          {title.trim() && (
            <p style={{ color: isTitleValid ? "green" : "red"}}>
              {isTitleValid ? "Titolo valido" : "Hai inserito un simbolo"}
            </p>
          )}
        </div>

          

        <div>
          <textarea
            name="description"
            id="description"
            ref={descriptionRef}
            placeholder="Breve descrizione"
            />
        </div>
        

        <div>
          <select name="status" id="status" ref={statusRef}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button type="submit">Aggiungi task</button>
      </form>
    </>
  )
}