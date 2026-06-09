import { useState } from "react";
function ToDoItem({item,toggleComplete,deleteToDo,editTodo}){
    const[editing,setEditing]=useState(false);
    const [editText,setEditText]=useState(item.text);

    function handleSave(){
        editTodo(item.id,editText);
        setEditing(false);
    }
    return(
        <div className="to-do-item">
            <input type="checkbox" checked={item.completed} onChange={() => toggleComplete(item.id)} />
            {editing?(<><input value={editText} onChange={(e)=>setEditText(e.target.value)}/><button onClick={handleSave}>Save</button></>):(<><span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text} </span><button onClick={() => setEditing(true)}>Edit</button></>)}
            <button onClick={() => deleteToDo(item.id)}>Delete</button>
        </div>
    )
}
export default ToDoItem;