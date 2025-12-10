function StudentCard(props){
    return(
        <div>
            <h2>name: {props.name}</h2>            
            <h2>Age: {props.age}</h2>
            <h2>Course:  {props.course}</h2>
        </div>
    )
}
export default StudentCard;