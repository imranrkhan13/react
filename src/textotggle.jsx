import { useState } from "react";

function Text(){
    const[isVisible, setIsVisible] = useState(true);

    function toggle(){
        setIsVisible(prev => !prev);
    }
    const buttonText = isVisible ? "Click to hide me" : "Click to Reveal";
    const Para  ="This text is visible";
    return(
        <div>
           <button className="m-1" onClick={toggle}>{buttonText}</button>
            <h2>{isVisible && Para}</h2>
        </div>
    )
}
export default Text;