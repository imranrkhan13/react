import { useState } from "react";

function Themetoggle() {
    const [theme, setTheme] = useState("light");

     const styles = {
         backgroundColor: theme === "light" ? "white" : "#2c3e50",
         color: theme === "light" ? "black" : "white",
         height: "100vh",
         padding: "20px"
     }
    function changetheme(){
        setTheme(prev => (prev === "light"? "dark":"light"))
    }
    return(
        <div style={styles}>
            <h1>The current theme is : {theme}</h1>
            <button onClick={changetheme}>
                switch to {theme === "light" ? "dark": "light"} 
            </button>
        </div>
    )
}

export default Themetoggle