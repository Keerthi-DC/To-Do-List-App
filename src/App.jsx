import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "DO Internhala React Assignment - 1",completed:false },
    { id: 2, text: "DO Internhala React Assignment - 2",completed:true  },
    { id: 3, text: "DO Internhala React Assignment - 3",completed:true},
    { id: 4, text: "DO Internhala React Assignment - 4",completed:false },
    { id: 5, text: "DO Internhala React Assignment - 5",completed:true },
    { id: 6, text: "DO Internhala React Assignment - 6",completed:true },
    { id: 7, text: "DO Internhala React Assignment - 7",completed:false },
    { id: 8, text: "DO Internhala React Assignment - 8",completed:true },
    { id: 9, text: "DO Internhala React Assignment - 9",completed:false },
    { id: 10, text: "DO Internhala React Assignment - 10",completed:true },
  ])
  function addTodo(text){

  }
  function toggleComplte(id){

  }
  function deleteToDo(id){

  }
  function editTod(id,newtext){
    
  }
  return (
    <div>
      <Header />
      <ToDoList todo={todo} />
    </div>
  )
}

export default App
