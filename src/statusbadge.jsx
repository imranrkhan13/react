function StatusBadge(isActive) {
    return (
        <p>
            {isActive ? <span>Active 🟢</span> : <span>Offline 🔴</span>}
        </p>
    )
}

export default StatusBadge;