import React from "react";
import Task from './Task';

function TaskList({tasks, onDeleteTask}) {

  const handleDeleteTask = (element) => onDeleteTask(element);

  return (
    <div className="tasks">
      {
        tasks.map((task, index) => <Task key={index} category={task.category} text={task.text} onDeleteTask={handleDeleteTask} />)
      }
    </div>
  );
}

export default TaskList;
