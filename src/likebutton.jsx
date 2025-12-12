import { useState } from "react";
function Likebutton(){
    const [liked, setLiked] = useState(false);

    function ToggleLike(){
        setLiked(!liked)
    }
    return(
        <div>
            <h2>
                {liked? <span>"You liked this??"</span>: <span>"Do you like this??"</span>}
            </h2>
            <button onClick={ToggleLike}>
                {liked? "Unlike": "Like"}
            </button>
        </div>
    )
}
export default Likebutton;