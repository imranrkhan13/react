function ProductCard({title, price, description, inStock}) {
    return(
        <div className = "Product">
            <h2>{title}</h2>
            <h2>Price = ${price}</h2>
            <h2>{description}</h2>

            <p>
                {inStock? <span><h2>Available</h2></span> : <span><h2>Not in Stock</h2></span>}
            </p>
        </div>
    )
}
export default ProductCard;