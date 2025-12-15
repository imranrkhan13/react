import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");

    function handleAdd() {
        if (input.trim() === "") {
            alert("Please enter a task")
        }
        if (input.trim() === "") return;
        const isConfirmed = window.confirm("Are you sure you want to add " + input + " in a todo list??");
        if (isConfirmed) {
            setTasks([...tasks, input]);
            setInput("");
        }
    }
    function handleDelete(index) {
        const taskToDelete = tasks[index];
        const newTasks = tasks.filter((_, i) => i !== index);
        const deletion = window.confirm(`Are you sure you want to delete "${taskToDelete} " from a todo list??`);
        if (deletion) {
            setTasks(newTasks)
        };
    }
    return (
        <div className="form-group">
            <h2>Todo App</h2>
            <input className="form-control" id="exampleInputName1" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Write a Task" />
            <button className="m-3" onClick={handleAdd}>Add</button>
            <ul>
                {tasks.map((tasks, index) => (
                    <li key={index}>
                        {tasks}
                        <button className="m-3" onClick={() => handleDelete(index)}>Delete</button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;