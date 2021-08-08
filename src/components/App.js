import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filterValue, setFilterValue] = useState('All');

  const updateFilterValue = (newFilter) => setFilterValue(newFilter);

  const filteredTasks = () => tasks.filter(task => {
    if(filterValue === 'All') return true;
    return task.category === filterValue;
  });
  
  const addNewTask = (newTask) => setTasks(prev => [...prev, newTask]);
  const handleDeleteTask = (element) => setTasks(tasks.filter(task => !(task.text === element)))

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={updateFilterValue} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addNewTask} />
      <TaskList tasks={filteredTasks()} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;