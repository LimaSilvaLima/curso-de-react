import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'; 
import {v4} from "uuid";


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks"))|| []
  );

  useEffect(()=>{
    localStorage.setItem("tasks",   JSON.stringify(tasks))
  }, [tasks]);

  
  
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
    // SE QUISER, VOCÊ PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  }, []);

  //fetchTasks();
  //*** Retirar este comento quandotiver conexa para capturar do API
  
  
  

  function onTaskClick (taskId) {
   
    const newTasks = tasks.map(task => {
      //precisa atualizar o estado
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      } else {
        //retorna o objeto sem alteração
        return task
      }   
    })
    setTasks(newTasks)    
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
    
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      
      id: v4(),
      title,
      description,
      isCompleted: false,
    }
    setTasks([...tasks, newTask]);
    
  }


  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className='w-96 h-96 bg-white rounded-lg shadow-lg p-6  space-y-4'>
        <h1 className="text-3xl text-slate-400 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask
          onAddTaskSubmit={onAddTaskSubmit}
        />
        <Tasks 
          tasks={tasks} onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
     
      
    </div>
  )
}

export default App
