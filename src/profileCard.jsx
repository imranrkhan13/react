import StatusBadge from "./statusbadge";
import Skills from "./skillset";
function Profile({name, age, country, skills, isActive}){
    return(
        <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
        <h2>Country: {country}</h2>
        <h3>Skills: </h3>
        <Skills skills = {skills} />
        <StatusBadge isActive = {isActive} />
</div>
    )
}

export default Profile;