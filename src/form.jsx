function Biodata({name,age,city,bio,isMarried}){
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
            <h1>City: {city}</h1>
            <h1>Bio: {bio}</h1>
             <h1>
                {isMarried? <span>Married</span>: <span>Unmarried</span>}
             </h1>
        </div>
    )
}

export default Biodata;