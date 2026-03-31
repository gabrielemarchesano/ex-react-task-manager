import { createContext, useContext, useEffect, useState } from "react";
import useTasks from "../hooks/useTasks";

// creo il contesto
const  GlobalContext = createContext();


// provider
function GlobalProvider({ children }){
  
  const { tasks, setTasks, addTask, removeTask, updateTask } = useTasks();
  
  return(
    <GlobalContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
      {children}
    </GlobalContext.Provider>
  );
}

// consumo il contesto
function useGlobalProvider(){
  const context = useContext(GlobalContext);
  return context;
}

export {GlobalProvider, useGlobalProvider}