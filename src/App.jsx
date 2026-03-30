import { BrowserRouter, Route, Routes } from "react-router-dom"
import TasksList from "./pages/TasksList"
import AddTask from "./pages/AddTask"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<TasksList />} />
          <Route path="/addTask" element={<AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
