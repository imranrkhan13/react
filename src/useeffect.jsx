import { useEffect, useState } from "react";

function UseEffect() {
    useEffect(() => {
        console.log("Component Mounted");
    }, [])

    return(
        <div>
            <h2>useEffect demo</h2>
        </div>
    )
}

export default UseEffect;