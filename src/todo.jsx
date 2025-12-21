import { useEffect, useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("task")) || [];
    });
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks));
    }, [tasks]);


    function handleAddorUpdate() {
        if (input.trim() === "") {
            alert("Please enter a task");
            return;
            
        }
        if (editIndex === null) {
            setTasks([...tasks, { text: input, completed: false }]);
        } else {
            const updatedTasks = [...tasks];
            updatedTasks[editIndex].text = input;
            setTasks(updatedTasks);
            setEditIndex(null);
        }

        setInput("");
    }

function handleEdit(index) {
    setInput(tasks[index].text);
    setEditIndex(index);
}

function handleDelete(index) {
    const taskToDelete = tasks[index];
    const newTasks = tasks.filter((_, i) => i !== index);
    const deletion = window.confirm(`Are you sure you want to delete "${taskToDelete} " from a todo list??`);
    if (deletion) {
        setTasks(newTasks)
    };
}
   

    function completed(index) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    }
return (
    <div className="form-group">
        <h2>Todo App</h2>
        <input
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a Task"
        />
        <button className="m-3"  onClick={handleAddorUpdate}>
            {editIndex === null ? "Add" : "Update"}
        </button>
        <ul>
            {tasks.map((task, index) => (
                <li key={index}>
                    
                    <span
                        onClick={() => completed(index)}
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            cursor: "pointer",
                            marginRight: "10px"
                        }}
                    >
                        {task.completed ? "✅ " : "⬜ "}
                        {task.text}
                    </span>
                    
                    <button className = "m-1"onClick={() => handleEdit(index)}>Edit</button>
                    <button className="m-1"  onClick={() => handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default Todo;