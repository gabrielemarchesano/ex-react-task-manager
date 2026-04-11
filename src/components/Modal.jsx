import ReactDOM from "react-dom"

export default function Modal({ 
  title,
  content,
  show, 
  onClose, 
  onConfirm,
  confirmText = "Conferma"
}){
  return show && ReactDOM.createPortal(
    <div>
      <div>
        <h2>{title}</h2>
        <div><h3>{content}</h3></div>
        <button onClick={onClose}>Annulla</button>
        <button onClick={onConfirm}>{confirmText}</button>
      </div>
    </div>,
    document.body
  )
}