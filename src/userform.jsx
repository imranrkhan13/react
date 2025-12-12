// user form that updates while typing
import { useState } from "react";
function UserForm(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    
    return(
        <div className="form-group">
            <input
            placeholder = "Enter your Name"
            value = {name}
            onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <input
            placeholder="name@example.com"
            value = {email}
            onChange={(e) => setEmail(e.target.value)} />
                        <br></br>

            <input
            type="number"
            placeholder = "Enter your Age"
            value = {age}
            onChange={(e) => setAge(e.target.value)}
            />
                        <br></br>

             <input
            placeholder = "Enter your City"
            value = {city}
            onChange={(e) => setCity(e.target.value)}
            />
                        <br></br>

            <input
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