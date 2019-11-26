import React from "react"
import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types"

const styles = {
    ul:{
        listStyle: "none",
        margin: 0,
        padding: 0
    }

}
function ToDoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index)=>
                <ToDoItem todo={todo}
                          key={todo.id}
                          index={index}
                          onChange={props.onToggle}
                />)}
        </ul>
    )
    
}
ToDoList.propTypes= {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ToDoList