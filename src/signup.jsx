import { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const isDisbaled =
        username === "" ||
        email === "" ||
        password.length < 6;

    function handleSignUp() {
        console.log("username: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);
        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h2>Create Account</h2>
            

            <input className="form-control" id="exampleInputUsername"
                type="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <br />

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

            <button className="m-3" onClick={handleSignUp} disabled={isDisbaled}>
                Create Account
            </button>
        </div>
    )
}

export default SignUp;