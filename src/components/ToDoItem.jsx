function ToDoItem({item}){
    return(
        <div className="to-do-item">
            <span>{item.text}</span>
        </div>
    )
}
export default ToDoItem;