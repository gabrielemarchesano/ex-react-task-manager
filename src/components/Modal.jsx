import ReactDOM from "react-dom"

export default function Modal({ 
  title,
  content,
  show, 
  onClose, 
  onConfirm
}){
  return show && ReactDOM.createPortal(
    <div>
      <div>
        <h2>{title}</h2>
        <p>Task: {content}</p>
        <button onClick={onClose}>Annulla</button>
        <button onClick={onConfirm}>Conferma</button>
      </div>
    </div>,
    document.body
  )
}