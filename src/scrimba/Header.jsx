export default function Header() {
    return (
        <header className="header">
            <img src="/react-logo.png" className="navlogo" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="navitems">Pricing</li>
                    <li className="navitems">About</li>
                    <li className="navitems">Contact</li>
                </ul>
            </nav>
        </header>
    )
}