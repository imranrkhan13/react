
function ChildCounter({OnIncrease, OnDecrease, Onreset}){
        return (
        <div>
            <button className="m-1" onClick={OnIncrease}>+</button>
            <button className="m-1" onClick={OnDecrease}>-</button>
            <button className="m-1 " onClick={Onreset}>Reset</button>
        </div>
    )
}
export default ChildCounter;