import { useState } from "react";

function UserPro() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        Country: ""
    });

    function HandleChange(e) {
        const { name, value } = e.target;

        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <div>
            <input className="form-control m-3" type="name"
                name="name"
                placeholder="Enter name"
                value={user.name}
                onChange={HandleChange} />
            <input className="form-control m-3" type="email"
                name="email"
                placeholder="Enter Email"
                value={user.email}
                onChange={HandleChange} />
            <input className="form-control m-3" type="text"
                name="Country"
                placeholder="Enter Country"
                value={user.Country}
                onChange={HandleChange} />

            <h3>Preview</h3>
            <p>Name : {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Country: {user.Country}</p>
        </div>
    )
}

export default UserPro;