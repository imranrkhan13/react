function MovieCard ({title, rating, year, isAvailable}){
    return(
        <div>
            <h2>Movie: {title}</h2>
            <h2>Rating: {rating}</h2>
            <h2>Year: {year}</h2>
            <p>
                {isAvailable ? <span>Available in cinemas</span> : <span>Not Available in cinemas</span>}
            </p>
        </div>
        
    )

}
export default MovieCard;