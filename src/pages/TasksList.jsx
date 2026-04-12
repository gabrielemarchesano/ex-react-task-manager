import { useContext, useMemo, useState } from "react";
import TaskRow from "../components/TaskRow";
import { GlobalContext } from "../context/GlobalContext"

export default function TasksList(){

  const { tasks } = useContext(GlobalContext);
  console.log(tasks)
  const [ sortBy, setSortBy ] = useState("createdAt");
  const [ sortOrder, setSortOrder ] = useState(1);

  const sortedTasks = useMemo(() => {

    const sorted = [...tasks];
    sorted.sort((a, b) => {
      if(sortBy === "title"){
        return a.title.localeCompare(b.title) * sortOrder;
      } else if(sortBy === "status"){
        const statusOrder = { "To do": 1, "Doing": 2, "Done": 3 };
        return (statusOrder[a.status] - statusOrder[b.status]) * sortOrder;
      } else if(sortBy === "createdAt"){
        return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * sortOrder;
      }
      return 0;
    });
    return sorted;
  }, [tasks, sortBy, sortOrder]);


  return(
    <>
      <h1>Tasks</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => {
              setSortBy("title");
              setSortOrder(sortOrder * -1);
            }}>Nome</th>
            <th onClick={() => {
              setSortBy("status");
              setSortOrder(sortOrder * -1);
            }}>Stato</th>
            <th onClick={() => {
              setSortBy("createdAt");
              setSortOrder(sortOrder * -1);
            }}>Data di creazione</th>
          </tr>
        </thead>
        <tbody>
          {
            sortedTasks.map(task => (
              <TaskRow key={task.id} task={task}/>
            ))
            
          }
        </tbody>
      </table>
      
    </>
  )
}