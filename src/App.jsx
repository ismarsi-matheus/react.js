import { useState } from "react";
import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar o framework React.js",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Matemática",
      description: "Estudar matemática básica",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Lógica de Programação",
      description: "Estudar lógica de programação",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
