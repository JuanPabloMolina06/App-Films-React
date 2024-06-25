import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center">
            <ul className="flex gap-5">
                <li><NavLink className="text-2xl font-font-header hover:text-hover-color" to="/">Home</NavLink></li>
                <li><NavLink className="text-2xl font-font-header hover:text-hover-color" to="filmes">Filmes</NavLink></li>
                <li><NavLink className="text-2xl font-font-header hover:text-hover-color" to="contato">Contato</NavLink></li>
                <li><NavLink className="text-2xl font-font-header hover:text-hover-color" to="sobre">Sobre</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;