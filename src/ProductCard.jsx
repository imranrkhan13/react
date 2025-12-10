function ProductCard({title, price, description, inStock}) {
    return(
        <div className = "Product">
            <h2>{title}</h2>
            <h2>Price = ${price}</h2>
            <h2>{description}</h2>

            <p>
                {inStock? <span>Available</span> : <span>Not in Stock</span>}
            </p>
        </div>
    )
}
export default ProductCard;