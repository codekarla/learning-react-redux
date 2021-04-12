import Links from "./Links";
import "./Navbar.css";

function Navbar()
{
    return (
        <nav id="navbar">
            <a className="brand" href="#">
                <span className="bracket">&#10100;</span>CodeCode<span className="bracket">&#10101;</span>
            </a>
            <Links />
        </nav>
    )
}

export default Navbar;
