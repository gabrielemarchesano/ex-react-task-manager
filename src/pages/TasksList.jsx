import { useContext } from "react";
import TaskRow from "../components/TaskRow";
import { GlobalContext } from "../context/GlobalContext"

export default function TasksList(){

  const { tasks } = useContext(GlobalContext)

  console.log(tasks)

  return(
    <>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Stato</th>
            <th>Data di creazione</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <TaskRow key={task.id} task={task}/>
            ))
            
          }
        </tbody>
      </table>
      
    </>
  )
}