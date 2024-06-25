import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-primary-jp text-secondary-jp text-center items-center p-4 mb-4 justify-between">
            <h1 className="text-7xl font-font-header">JpFilms</h1>
            <Navbar/>
        </header>
        
     );
}

export default Header;