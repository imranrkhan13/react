import { useEffect, useState } from "react";
function PeopleList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch Users");
                setLoading(false);
            })
    }, []);

    return (

        <div>
            <h2>User list</h2>
            {loading && <p>Loading users</p>}
            {error && <p>{error}</p>}
            {!loading & !error && (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PeopleList;