import { useState } from "react";
function Likebutton(){
    const [liked, setLiked] = useState(false);

    function ToggleLike(){
        setLiked(!liked)
    }
    return(
        <div>
            <h2>
                {/*check if it is liked, show "do you like this" and vice versa */}
                {liked? <span>"You liked this??"</span>: <span>"Do you like this??"</span>}
            </h2>
            <button onClick={ToggleLike}>
                {/*chedk if the button is on like then show unlike */}
                {liked? "Unlike": "Like"}
            </button>
        </div>
    )
}
export default Likebutton;