import { useEffect, useState } from "react";

function Post() {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to fetch post");
                setLoading(false)
            });
    }, [])

    return (
        <div>
            <h2>Post: ({post.length})</h2>

            {loading && <p>Loading....</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <ul>
                    {post.map((item) => {
                       return <li key={item.id}>{item.title}</li>
                    })}
                </ul>
            )}
        </div>
    )
}

export default Post;