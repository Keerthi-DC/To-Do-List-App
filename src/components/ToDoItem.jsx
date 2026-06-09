import { useState } from "react";
function ToDoItem({item,toggleComplete,deleteToDo,editTodo}){
    const[editing,setEditing]=useState(false);
    const [editText,setEditText]=useState(item.text);

    function handleSave(){
        editTodo(item.id,editText);
        setEditing(false);
    }
    return(
         <div className={`todo-item ${item.completed ? 'completed' : ''}`}>
            <input className="todo-checkbox" type="checkbox" checked={item.completed} onChange={() => toggleComplete(item.id)} />
            {editing?(<div className="todo-edit-mode"><input className="todo-edit-input"value={editText} onChange={(e)=>setEditText(e.target.value)}/><button className="todo-save-btn" onClick={handleSave}>Save</button></div>):(<><span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text} </span><button className="todo-edit-btn" onClick={() => setEditing(true)}>Edit</button></>)}
            <button className="todo-delete-btn" onClick={() => deleteToDo(item.id)}>Delete</button>
        </div>
    )
}
export default ToDoItem;