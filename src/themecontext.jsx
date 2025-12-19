import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();
function Displaytheme() {
    const { theme } = useContext(ThemeContext);
    return(
        <h2>Current Theme: {theme}</h2>
    )
}
function ThemeApp(){
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        setTheme(prev=>(prev === "light" ? "dark" : "light"));
    }

    return(
        <ThemeContext.Provider value ={{theme, toggleTheme}}>
            <div>
                <button
                onClick={toggleTheme}>toggleTheme</button>
                <Displaytheme />
            </div>


        </ThemeContext.Provider>
    )
}
export default ThemeApp;