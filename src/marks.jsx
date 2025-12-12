function Result({name, marks}){
    let grade;

    if(marks>= 90){
        grade = "A";
    } else if(marks>= 75){
        grade = "B";
    } else if(marks>= 50){
        grade = "C"
    }else{
        grade = "Fail";
    }

    return(
        <div>
            <h2>Name: {name}</h2>
            <h2>Grade: {grade}</h2>
            <h2>Marks: {marks}</h2>
        </div>
    )   
}
export default Result;