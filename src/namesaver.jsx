import { useEffect, useState } from "react";

function Namesaver() {
    const [input, setInput] = useState(() => {
        return localStorage.getItem("name") || "";
    })
    useEffect(() => {
        localStorage.setItem("name", input);
    }, [input])
    return (
        <div>
            <h2>Hello, {input || "Stranger"}!</h2>
            <input className="form-control" id="exampleInputName" type="name"
                placeholder="Enter Name"
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    )
}

export default Namesaver;