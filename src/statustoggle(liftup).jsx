import Dasboard from "./dashboard(liftup)";
function Toggle({onToggle}){
    return(
        <button onClick={onToggle}>
            Toggle Status
        </button>
    )
}
export default Toggle;