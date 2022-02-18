import React, { useState } from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";


const App = () => {
 
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Tocar gaita',
      completed: false,
    },
    {
      id: '2',
      title: 'Fazer a janta',
      completed: true,
    }
  ]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10), //argumento no Math.random?
      completed:false,
    }]

    setTasks(newTasks);
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
       
    </>
  );
};

export default App;