import { useState } from "react";
function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        
         if(email ==="" || password === ""){
            alert("Please write your email and password ");
            return;
        }

        console.log("Email: ", email);
        console.log("Password: ", password);
        setEmail("");
        setPassword("");
       
    }


    return (
        <div>
            <h2>Login</h2>
            <input className="form-control" id="exampleInputEmail"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />

            <br />
            <input className="form-control" id="exampleInputPassword"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="m-3" onClick={handleLogin}>
                Login
            </button>
        </div>
    )

}

export default LoginForm;