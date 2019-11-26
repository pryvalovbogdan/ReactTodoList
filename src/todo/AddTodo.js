import React,{useState} from "react";


function AddTodo({onCreate}) {
    const [value, setValue] = useState("");

    function submitS(event) {
        event.preventDefault();

        if(value.trim()){
            onCreate(value)
            setValue("")
        }

    }
    return(
        <form style={{marginBottom: "1rem"}} onSubmit={submitS}>
            <input value={value} style={{width: "85%", padding: "3px"}} onChange={event => setValue(event.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
    
}


export default AddTodo