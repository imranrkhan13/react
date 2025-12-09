import { useState } from "react";

function Todo(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
    function handleAdd(){
        if(input.trim() === "") return;
        setTasks([...tasks, input]);
        setInput("")
    }
    function handleDelete(index){
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    }
    return(
        <div>
            <h2>Todo App</h2>

            <input 
            value= {input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a Task"
            />

            <button onClick={handleAdd}>Add</button>
            <ul>
                {tasks.map((tasks, index) => (
                    <li key = {index}>
                        {tasks}

                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;