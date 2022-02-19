import React from "react";
import "./Task.css";

const Task = ({ task, handleTaskClick, handleRemoveClick }) => {
  return (
    <div
      className="task-container"
      style={
        task.completed ? { borderLeft: "6px solid rgb(238, 238, 13)" } : {}
      }
      onClick={() => handleTaskClick(task.id)}
    >
      {task.title}

      <div className="buttons-container">
        <button className="remove-task-button" onClick={() => handleRemoveClick(task.id)}>X</button>
      </div>
    </div>
  );
};

export default Task;
