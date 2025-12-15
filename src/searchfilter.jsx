import { useState } from "react";

function SearchFilter() {
    const [search, setSearch] = useState("");
    const items = ["Rust", "react", "python", "Javascript", "Java"];

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div>
            <h2>Search Feature</h2>
            <input className="form-control" rows="1"
                type="text"
                placeholder="Type something"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredItems.length === 0 ? (
                    <li>No items found for {search}</li>
                ) : (filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                            )
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default SearchFilter;