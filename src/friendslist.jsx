function FriendsList(){
    const friends = ['Imran', 'sdfsdf', 'sdfsdf','kdgsdf']

    return(
        <div>
            <h2>Friends List</h2>

            {friends.map((friends, index) => (
                <h2 key={index}>{index + 1}.{friends}</h2>
            ))}
        </div>
    )
}

export default FriendsList;