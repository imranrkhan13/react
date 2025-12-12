import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleReset = () => {
        const isConfirmed = window.confirm("Are you sure you want to reset?");
        if (isConfirmed) {
            setCount(0);
        }
    };
    return (
        <div>
            <h2>{count}</h2>
            <button className="btn btn-primary btn-lg" onClick={() => setCount(count + 1)}>Increase</button>
            <button className="btn btn-primary btn-lg" onClick={() => setCount(count - 1)}>Decrease</button>
            <button className="btn btn-primary btn-lg" onClick={handleReset}>Reset</button>
        </div>
    )

}
export default Counter;