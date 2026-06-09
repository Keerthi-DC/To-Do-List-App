import { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Keeru D C submitted Internshala React Assignment - 1",completed:true },
    { id: 2, text: "Marks allocated for Kerthi D C assignment 100/100",completed:false  },
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
  function toggleComplete(id){
      setTodo(todo.map(item=>item.id===id?{...item,completed:!item.completed}:item))
  }
  function deleteToDo(id){
      setTodo(todo.filter(item => item.id !== id));
  }
  function editTodo(id,newtext){
      setTodo(todo.map(item => item.id === id ? { ...item, text: newtext } : item));
  }
  return (
    <div className="container">
      <div className="todo-card">
        <Header />
        <form className="todo-form"onSubmit={handleAdd}>
          <input className="todo-input" value={input} onChange={(e)=>setInput(e.target.value)}placeholder='Add a task to your to-do list'/>
          <button className="todo-add-btn" type='submit'>Add</button>
        </form>
        <ToDoList todo={todo} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editTodo={editTodo}/>
      </div>
    </div>
  )
}

export default App
