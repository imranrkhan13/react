// user form that updates while typing
import { useEffect, useState } from "react";
function UserForm(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
        console.log("User typed: ", name || age || bio || city || email);
    }, [name, age, bio, city, email])
    
    return(
        <div className="form-group">
            <input className="form-control" id="exampleInputName1"
            placeholder = "Enter your Name"
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input className="form-control" id="exampleInputEmail1"
            placeholder="name@example.com"
            value = {email}
            onChange={(e) => setEmail(e.target.value)} />
                        <br></br>

            <input className="form-control" id="exampleInputAge1"
            type="number"
            placeholder = "Enter your Age"
            value = {age}
            onChange={(e) => setAge(e.target.value)}
            />
                        <br></br>

            <input className="form-control" id="exampleInputCity1"
            placeholder = "Enter your City"
            value = {city}
            onChange={(e) => setCity(e.target.value)}
            />
                        <br></br>

            <input className="form-control" id="exampleInputBio1"
            placeholder = "Enter Bio"
            value = {bio}
            onChange={(e) => setBio(e.target.value)}
            />


            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Age: {age}</h2>
            <h2>City: {city}</h2>
            <h2>Bio: {bio}</h2>
            
        </div>
        
    )
    
}
export default UserForm;