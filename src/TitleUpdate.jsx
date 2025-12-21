import { useEffect, useState } from "react";

function Title(){
    const [name, setName] = useState(() =>{
        return(localStorage.getItem("name" || ""))
    });

    useEffect(() => {
        localStorage.setItem("name", name);
    }, [name])

    useEffect((e) => {
        if(name){
            document.title =`Hello, ${name}`
        }else{
            document.title =`No name provided`
        }
    }, [name])

    return(
        <div>
            <h2>Write your name for a title : {name}</h2>

            <input className="form-control m-3" type="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default Title;