import { useCallback, useState } from 'react';
import Button from './childparent.jsx'
function Parent() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10000000);

    function slowFunction(num) {
        console.log("Calulating...");
        let total = 0;
        for (let i = 0; i < num; i++) {
            total += 1;
        }
        return total;
    }

    const result = useMemo(() => {
        return slowFunction(number);
    }, [number])
    const HandleClick = useCallback(() => {
        console.log("Button Clicked")
    }, [])
    return (
        <div>
            <h2>USememo: {result}</h2>
            <h2>
                {count}
            </h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <Button onClick={HandleClick} />
        </div>
    )
}

export default Parent;