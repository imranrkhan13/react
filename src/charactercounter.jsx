import { useState } from "react";

function CharacterCounter() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
            <h2>Characters: {text.length}</h2>
            <input className="form-control" id="exampleFormControlBio" rows="1" type="text"
                placeholder="Write something"
                value={text}
                onChange={handleChange} />
            <br />
            <button className="m-3" disabled={text.length === 0}>
                Submit
            </button>
        </div>
    )
    
}

export default CharacterCounter;