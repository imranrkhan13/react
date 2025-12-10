function Skills({skills}){
    if( skills === 0){
        <h2>No skills added yet.</h2>
    }
    return(
        <ul>
            {skills.map((skills, index) => (
                <li key = {index}>{skills}</li>
            ))}
        </ul>
    )
}

export default Skills;