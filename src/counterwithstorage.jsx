import { useEffect, useState } from "react"

function PersistentCounter() {
    const [number, setNumber] = useState(() => {
        return Number(localStorage.getItem("savednum")) || 0;
    })
    useEffect(()=>{
        localStorage.setItem("savednum", number)
    }, [number])

    return(
        <div>
            <h2>Number : {number}</h2>

            <button onClick={() => setNumber(number +1)}>+</button>

            <button disabled ={number === 0} 
            onClick={() => setNumber(number - 1)}>-</button>
        </div>
    )
}

export default PersistentCounter;