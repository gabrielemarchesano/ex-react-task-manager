import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

export default function EditTaskModal({ show, onClose, task, onSave }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To do");
  const editFormRef = useRef();

  useEffect(() => {
    if (show && task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setStatus(task.status || "To do");
    }
  }, [task, show]);


  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      ...task,
      title: title,
      description: description,
      status: status
    }
    onSave(updatedTask);
    onClose();
  };

  return (
    <Modal
      show={show}
      title={"Modifica task"}
      content={
        <form id="edit-form" ref={editFormRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Nome</label>
            <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <input id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
          <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
            <option value="To do">To do</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        </form>
      }
      confirmText={"Salva"}
      onConfirm={() => editFormRef.current.requestSubmit()}
      onClose={onClose}
    />
  )
}