function Notification({message, type, time}){
    let icon ;
    let color; 
    if (type === "success"){
        icon = "🟢",
        color ="green"
    }
    if (type === "error"){
        icon = "🔴",
        color ="red"
    }
    if (type === "warning"){
        icon = "🟡",
        color ="goldenrod"
    }
    return(
        <div style = {{color:color}}>
        <h3>{icon} {message}</h3>
        <p>{time}</p>
        </div>
    );
}

export default Notification;