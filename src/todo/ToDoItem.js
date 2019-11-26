import React,{useContext} from "react"
import Context from "../context";

 function ToDoItem({todo, index, onChange}) {
     const {removeTodo} =useContext(Context)
    const clasess = [];
    if(todo.compleated){
        clasess.push("done")
    }

    return (
        <li>
            <span className={clasess.join(" ")}>
            <input type="checkbox" checked={todo.compleated} onChange={()=>onChange(todo.id)}/>
            {index + 1}: {todo.title}
            </span>
            <button onClick={()=>removeTodo(todo.id)}>&times;</button>
        </li>
    )
}



export default ToDoItem