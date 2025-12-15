import { useEffect, useState } from "react";
import Display from "./statusdisplay(liftup)";
import Toggle from "./statustoggle(liftup)";
function Dasboard(){
    const [status, setStatus] = useState("Offline");
    useEffect(() => {
        console.log("Staus: ", status);
    }, [status])
    function toggleStatus(){
        setStatus(status === 'Offline' ? 'Online': 'offline');
    }
    return(
        <div>
            <h2>Status:{status}</h2>
            <Display status={status} />
            <Toggle onToggle={toggleStatus} />
        </div>
    )
}

export default Dasboard;