import { memo } from "react";
import { useGlobalProvider } from "../context/GlobalContext";

function TaskRow() {

  const { tasks } = useGlobalProvider();

  console.log(tasks)

  return (
    <>
    {
      tasks.map(task => (
        <tr key={task.id}>
          <td>{task.title}</td>
          <td style={{backgroundColor: task.status === "To do" && "red" || task.status === "Doing" && "yellow" || "green"}}>{task.status}</td>
          <td>{task.createdAt}</td>
        </tr>
      ))
    }
    </>

  )
}

export default memo(TaskRow)