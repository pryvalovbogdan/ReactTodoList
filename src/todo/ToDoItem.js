import React,{useContext} from "react"
import Context from "../context";
const styles = {
    span:{
        display: "inline-block",
        width: "90%",

    },
    li:{
        border: "1px solid indigo",
        width: "100%",
        marginBottom: "3px",
        padding: "5px",
        borderRadius: "5px"

    }


}
 function ToDoItem({todo, index, onChange}) {
     const {removeTodo} =useContext(Context)
    const clasess = [];
    if(todo.compleated){
        clasess.push("done")
    }

    return (
        <li style={styles.li}>
            <span className={clasess.join(" ")} style ={styles.span}>
            <input type="checkbox"  checked={todo.compleated} onChange={()=>onChange(todo.id)}/>
            {index + 1}: {todo.title}
            </span>
            <button onClick={()=>removeTodo(todo.id)}>&times;</button>
        </li>
    )
}



export default ToDoItem