import { createContext, useContext, useEffect, useState } from "react";

// creo il contesto
const  GlobalContext = createContext();

const url = import.meta.env.VITE_URL;

// provider
function GlobalProvider({ children }){
  const [ tasks, setTasks ] = useState([]);

  const values = {
    tasks,
    setTasks
  }

  useEffect(() => {
    fetch(`${url}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err))
  }, [])

  console.log(tasks)
  
  return(
    <GlobalContext.Provider value={values}>
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