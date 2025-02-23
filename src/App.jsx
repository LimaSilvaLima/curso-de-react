import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'; 
import {v4} from "uuid";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar Programação',
      description: 'Estudar java, c# .net, javascript, typescript, html, css',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Estudar ingles',
      description: 'Desenvolver habilidade de escuta',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Estudar Frameworks',
      description: 'Estudar springboot, .net, node, tailwind, react',
      isCompleted: false,
    },
  ])

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
