import ToDoItem  from './ToDoItem';
function ToDoList({todo}){
    return(
       <div className="todo-list">
            {
                todo.map((item)=>(
                    <ToDoItem key={item.id}
                    item={item}/>
                ))
            }
        </div>
    )
}
export default ToDoList;