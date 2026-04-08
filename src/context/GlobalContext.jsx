import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks"

/* esporto il GlobalContext */
export const GlobalContext = createContext()

/* children = tutti le prop condivise dal GlobalProvider */
export default function GlobalProvider({ children }) {

/* ho accesso a tutti questi parametri(stati, funzioni) in tutto il progetto, grazie al GlobalProvider */
const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks()

return (
  <GlobalContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
    {children}
  </GlobalContext.Provider>
)
}