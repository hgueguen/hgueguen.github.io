import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';
import logo from '../assets/images/logo.jpg';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-title">
               <img src={logo} alt='the logo' className='logoImage'/>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/projects" className="nav-link">Projets</Link>
                <Link to="/about" className="nav-link">À propos de moi</Link>
            </div>
            <div>
                <Link to="/contact" className="nav-contact">Me contacter !</Link>
            </div>
        </nav>
    );
}

export default Navbar;
