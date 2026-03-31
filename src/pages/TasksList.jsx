import TaskRow from "../components/TaskRow";
import { useGlobalProvider } from "../context/GlobalContext"

export default function TasksList(){

  const { tasks } = useGlobalProvider();

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
          <TaskRow />
        </tbody>
      </table>
      
    </>
  )
}