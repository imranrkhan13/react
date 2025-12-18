 import React from "react";
const Button = React.memo(
    function Button({onClick}) {
        console.log("Button Rendered");
        return <button onClick={onClick}>CLick me</button>
    }
)
export default Button;