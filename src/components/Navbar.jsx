import { NavLink } from "react-router-dom";

export default function Navbar(){
  return(
    <ul>
      <li>
        <NavLink to={"/"}>Tasks</NavLink>
      </li>
      <li>
        <NavLink to={"/addTask"}>Add task</NavLink>
      </li>
    </ul>
  )
}