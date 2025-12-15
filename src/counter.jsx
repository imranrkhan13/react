import { useEffect, useState } from "react";
import ChildCounter from './counterchild';

function Counter() {
    const [number, setNumber] = useState(0)

    function Increase() {
        setNumber(number + 1)
    }
    function Decrease() {
        if (number > 0) {
            setNumber(number - 1)
        }
    }
    function Reset() {
        if (window.confirm("Are you sure you want to reset????")) {
            setNumber(0);
        }
    }
    useEffect(() => {
        console.log("Number changed to: ", number);
    }, [number]);

    return (
        <div>
            <h2>{number}</h2>

            <ChildCounter
                OnIncrease={Increase}
                OnDecrease={Decrease}
                Onreset={Reset} 
            />
        </div>
    )


}
export default Counter;