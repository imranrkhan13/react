import { useState } from "react";

function Limit(){
    const [number, setNumber] = useState(0);

    return(
        <div>
            <h2>{number}</h2>
            <button className="m-1"
            onClick={() => setNumber(number + 1)}
            disabled = {number >=10}>+</button>
            <button className="m-1"
            onClick={() => setNumber(number - 1)}
            disabled = {number == 0}>-</button>
        </div>

    )
}

export default Limit;