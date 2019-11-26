import React,{ useEffect} from 'react';
import ToDoList from "./todo/ToDoList";
import Context from "./context";
import AddTodo from "./todo/AddTodo";
import Loader from "./Loader";


function App() {

  let [todos, setTodos] = React.useState( [])
    let [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos => {
                setTimeout(()=>{
                    setTodos(todos)
                    setLoading(false)
                }, 5000)
            })
    },[])

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
    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            compleated:false
        }]))
    }
  return (
      <Context.Provider value ={{removeTodo}}>
      <div className="wrapper">
        <h1 style={{marginTop: "5rem"}}>Todo List</h1>
          <AddTodo onCreate={addTodo}/>
          {loading && <Loader />}
      {todos.length ? <ToDoList todos={todos} onToggle={toggleTodo} /> : loading?null:
          <p>You have nothing to do</p>}
      </div>
      </Context.Provider>
  );
}

export default App;
