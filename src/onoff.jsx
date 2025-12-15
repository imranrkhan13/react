import { useState } from "react";

function ONOFF(){
    const[isOn, setIsOn] = useState(false);
    function Toggle(){
       setIsOn (!isOn)
    }
    return(
        <div>
            <h2>it is {isOn ? "On": "Off"}</h2>
           <button onClick={Toggle}>
                Toggle
           </button>
        </div>
    )
}
export default ONOFF;