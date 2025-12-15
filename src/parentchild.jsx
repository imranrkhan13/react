import Childparent from './childparent.jsx'
function Parent(){
    const username = "imran";

    return(
        <div>
            <h2>Parent component</h2>
            <Childparent name = {username} />
        </div>
    )
}

export default Parent;