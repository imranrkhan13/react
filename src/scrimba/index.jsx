import { Fragment } from "react";
import ReactDOM from "react-dom/client";

function MainContent() {
    return (
        <Fragment>
            <Header />
            <Miacontent />
            <Footer />
        </Fragment>
    )
}

function Header() {
    return(
        <header className="header">
            <img src="/public/react-logo.png" className="navlogo" alt="React logo" />
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
function Miacontent() {
    return(
        <main>
            <h1>Reason I am excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>
        </main>
    )
}
function Footer() {

    return (
        <footer>
            <small>© 2024 Ziroll development. All rights reserved.</small>
        </footer>
    )
}
ReactDOM.createRoot(document.getElementById("root"))
    .render(<MainContent />);
