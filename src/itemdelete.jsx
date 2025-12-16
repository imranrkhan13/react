import { useState } from "react";

function ItemDelete() {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    function Add() {
        if (input.trim() === "") return;
        setItems(prevItems => [...prevItems, input]);
        setInput("");
    }
    function Delete(index,itemContent) {
        if (window.confirm(`Are you sure you want to delete "${itemContent}" from the list???`)) {
            const newItems = items.filter((_, i) => i !== index);
            setItems(newItems);
        }
    }
    return (
        <div>
            <input className="form-control"
                placeholder="Enter item"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="m-1" onClick={Add}>ADD</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}

                        <button className="m-1" onClick={() => Delete(index,item)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ItemDelete;
