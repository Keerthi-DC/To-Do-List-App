import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "DO Internhala React Assignment - 1",completed:false },
    { id: 2, text: "DO Internhala React Assignment - 2",completed:true  },
  ])

  const [input,setInput]=useState("");
  const handleAdd=(e)=>
    { 
      e.preventDefault();
      addTodo(input);
      setInput("");
    }

  function addTodo(text){
      if(text.trim()==="")return;
      const newTodo={
        id:Date.now(),
        text:text,
        completed:false
      };
      setTodo([...todo,newTodo])
  }
  function toggleComplte(id){
      setTodo(todo.map(item=>item.id===id?{...item,completed:!item.completed}:item))
  }
  function deleteToDo(id){
      setTodo(todo.filter(item => item.id !== id));
  }
  function editTodo(id,newtext){
      setTodo(todo.map(item => item.id === id ? { ...item, text: newtext } : item));
  }
  return (
    <div>
      <Header />
      <form onSubmit={handleAdd}>
        <input value={input} onChange={(e)=>setInput(e.target.value)}placeholder='Add a task'/>
        <button type='submit'>Add</button>
      </form>
      <ToDoList todo={todo} toggleComplte={toggleComplte} deleteToDo={deleteToDo} editTod={editTodo}/>
    </div>
  )
}

export default App
