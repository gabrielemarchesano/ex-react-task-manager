import { memo } from "react";
import { Link } from "react-router-dom";

function TaskRow({task}) {

  return (
    <>
      <tr key={task.id}>
        <td><Link to={`/task/${task.id}`}>{task.title}</Link></td>
        <td style={{backgroundColor: task.status === "To do" && "red" || task.status === "Doing" && "yellow" || "green"}}>{task.status}</td>
        <td>{task.createdAt}</td>
      </tr>
    </>

  )
}

export default memo(TaskRow)