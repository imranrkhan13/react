import { useState } from "react";

function Registerform(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [bio, setBio] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    function HandleSubmittedData(e){
        e.preventDefault();
        
         if (!name || !age || !city || !bio === "") {
            alert("All fields are required!");
            return;
        }
        const formData = {
            name,
            age,
            city,
            bio,
        }
        setSubmittedData(formData);
       setName("");
    setAge("");
    setCity("");
    setBio("");
        
       
    }

    return(
        <div>
            <h2>User Registration Form</h2>

            <form onSubmit={HandleSubmittedData}>
                <input  
                placeholder="Enter Name"
                value = {name}
                onChange={(e) => setName(e.target.value)}/>
                <br></br>

                <input type="number"
                placeholder="Enter Age"
                value = {age}
                onChange={(e) => setAge(e.target.value)}/>
                <br></br>

                <input
                placeholder="Enter City"
                value = {city}
                onChange={(e) => setCity(e.target.value)}/>
                <br></br>   

                <textarea
                placeholder="Enter Bio"
                value = {bio}
                onChange={(e) => setBio(e.target.value)}>
                </textarea>
                <br></br>

                <button type="submit">Submit</button>
            </form>

            {submittedData &&(
                <div style={{marginTop: "20px"}}>
                    <h3>Data: </h3>
                    <h2>Name: {submittedData.name}</h2>
                    <h2>Age: {submittedData.age}</h2>
                    <h2>City: {submittedData.city}</h2>
                    <h2>Bio: {submittedData.bio}</h2>
                </div>
            )}
        </div>
        
    )
}


export default Registerform;