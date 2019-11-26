import React from 'react';
import ToDoList from "./todo/ToDoList";
import Context from "./context";
function App() {
  let [todos, setTodos] = React.useState( [
      {id:1, compleated:false, title: "Buy a bread"},
    {id:2, compleated:false, title: "Buy a milk"},
    {id:3, compleated:true, title: "Buy a butter"}
      ])
    function toggleTodo(id){
      setTodos( todos.map(todo => {
          if(todo.id === id){
              todo.compleated = !todo.compleated
          }
          return todo
      })
      )
    }

    function removeTodo(id) {
      setTodos(todos.filter(todo => todo.id !== id))

    }
  return (
      <Context.Provider value ={{removeTodo}}>
      <div className="wrapper">
        <h1>React tutorial</h1>
      {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo} /> : <p>You have nothing to do</p>}
      </div>
      </Context.Provider>
  );
}

export default App;
