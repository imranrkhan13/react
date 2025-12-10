function NotificationCard({ user, type, message, app }) {
    function RenderNotif() {
        if (type === "like") {
            return (
                <p>
                <strong>{user}</strong> Liked your post on {app}
                </p>
            )
        }
         if (type === "comment") {
            return (
                <p>
                <strong>{user}</strong> Commented {message} on {app}
                </p>
            )
        }
         if (type === "follow") {
            return (
                <p>
                <strong>{user}</strong> Followed you on {app}
                </p>
            )
        }
        else{
            return(
                <p>
                    You have a notification on {app}
                </p>
            )   
        }
    }
    return(
        <div>
            {RenderNotif()}
        </div>
    )
}

export default NotificationCard;