import Links from "./Links";
import "./Navbar.css";

function Navbar()
{
    return (
        <nav id="navbar">
            <a class="brand" href="#">
                <span class="bracket">&#10100;</span>BrandBrand<span class="bracket">&#10101;</span>
            </a>
            <Links />
        </nav>
    )
}

export default Navbar;
