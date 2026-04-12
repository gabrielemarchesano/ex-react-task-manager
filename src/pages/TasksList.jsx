import { useCallback, useContext, useMemo, useState } from "react";
import TaskRow from "../components/TaskRow";
import { GlobalContext } from "../context/GlobalContext"

function debounce(callback, delay){
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value)
    }, delay)
  }
}

export default function TasksList() {

  const { tasks } = useContext(GlobalContext);
  console.log(tasks)
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const debounceSearch = useCallback(debounce(setSearchQuery, 500), []);

  const sortedAndFilteredTasks = useMemo(() => {

    const sorted = [...tasks];
    sorted.sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title) * sortOrder;
      } else if (sortBy === "status") {
        const statusOrder = { "To do": 1, "Doing": 2, "Done": 3 };
        return (statusOrder[a.status] - statusOrder[b.status]) * sortOrder;
      } else if (sortBy === "createdAt") {
        return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * sortOrder;
      }
      return 0;
    });
    return sorted.filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [tasks, sortBy, sortOrder, searchQuery]);


  return (
    <>
      <input
        type="text"
        onChange={event => debounceSearch(event.target.value)}
        placeholder="Cerca task..."
      />

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
            sortedAndFilteredTasks.map(task => (
              <TaskRow key={task.id} task={task} />
            ))

          }
        </tbody>
      </table>

    </>
  )
}