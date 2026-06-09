import ToDoItem  from './ToDoItem';
function ToDoList({todo,toggleComplete, deleteToDo, editTodo}){
    return(
       <div className="todo-list">
            {
                todo.map((item)=>(
                    <ToDoItem 
                        key={item.id}
                        item={item}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editTodo={editTodo}
                    />
                ))
            }
        </div>
    )
}
export default ToDoList;