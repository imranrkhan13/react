import { useState } from "react";
function CartItem({name, price, initialQty}){
    const [qty, setQty] = useState(initialQty);

    function increase(){
        setQty(qty + 1);
    }
    function decrease(){
        if(qty > 1){
        setQty(qty-1);
        }
    }

    return(
        <div>
            <h2>product: {name}</h2>
            <h2>price: {price}</h2>
            <h2>Qty: {qty}</h2>
            <h2>Total: {price * qty}</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default CartItem;