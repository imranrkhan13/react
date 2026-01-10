import { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./footer";
import Miacontent from "./maincontent";
import Footer from "./footer";
function MainContent() {
    return (
        <Fragment>
            <Header />
            <Miacontent />
            <Footer />
        </Fragment>
    )
}
ReactDOM.createRoot(document.getElementById("root"))
    .render(<MainContent />);
