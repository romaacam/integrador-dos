import '../css/App.css';
import imagen from '../assets/img/logo.png';

const Navegacion = () => {
    return (
        <>
            <header>
                <nav className="navbar">
                    <div className="navbar__logo">
                        <a href='../../public/index.html' className="navbar__logo">
                            <img src={imagen} alt='logo' />
                        </a>
                    </div>
                    <h1 className='navbar__title'>
                        Electronigencia
                    </h1>
                    <ul className="navbar__ul">
                        <li className="navbar__li">Inicio</li>
                        <li className="navbar__li">Añadir Producto</li>
                        <li className="navbar__li">Contacto</li>
                        <li className="navbar__li">Nosotros</li>
                        <li className="navbar__li">Login</li>
                        <li className="navbar__li">
                            <input type="text" name="busqueda" placeholder="Buscar"/>
                            <button type="submit" className="button__navbar">Buscar</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Navegacion;