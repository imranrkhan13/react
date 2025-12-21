    import { useEffect, useState } from "react";

    function Todo() {
        const [tasks, setTasks] = useState(() => {
            return JSON.parse(localStorage.getItem("task")) || [];
        });
        const [input, setInput] = useState("");
        const [editIndex, setEditIndex] = useState(null);
        const [search, setSearch] = useState("");
        const [filter, setFilter] = useState("all");
        useEffect(() => {
            localStorage.setItem("task", JSON.stringify(tasks));
        }, [tasks]);

        const filteredTasks = tasks.filter((task) => {
            const matchesSearch = task.text.toLowerCase().includes(search.toLowerCase());
            const matchesFilter =
                filter === "all" ? true :
                    filter === "completed" ? task.completed :
                        !task.completed;

            return matchesSearch && matchesFilter;
        });

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
                <button className="m-3" onClick={handleAddorUpdate}>
                    {editIndex === null ? "Add" : "Update"}
                </button>
                <input
                    className="form-control mb-2"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="btn-group w-100">
                    <button className={`btn btn-outline-secondary ${filter === 'all' && 'active'}`} onClick={() => setFilter("all")}>All</button>
                    <button className={`btn btn-outline-secondary ${filter === 'active' && 'active'}`} onClick={() => setFilter("active")}>Active</button>
                    <button className={`btn btn-outline-secondary ${filter === 'completed' && 'active'}`} onClick={() => setFilter("completed")}>Completed</button>
                </div>
                <ul>
                    {filteredTasks.length > 0 ? (
                        filteredTasks.map((task, index) => {
                            const originalIndex = tasks.findIndex(t => t === task);

                            return (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    <span
                                        onClick={() => toggleComplete(originalIndex)}
                                        style={{
                                            textDecoration: task.completed ? "line-through" : "none",
                                            cursor: "pointer",
                                            flexGrow: 1
                                        }}
                                    >
                                        {task.completed ? "✅ " : "⬜ "} {task.text}
                                    </span>
                                    <div>
                                        <button className="btn btn-sm btn-warning me-1" onClick={() => { setInput(task.text); setEditIndex(originalIndex); }}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => handleDelete(originalIndex)}>Delete</button>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <li className="list-group-item text-center text-muted">No tasks found</li>
                    )}
                </ul>
            </div>
        )
    }

    export default Todo;