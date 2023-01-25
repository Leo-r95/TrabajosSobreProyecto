import React from 'react';
import '../styles/navbar.css';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <main>
            <div class="logo">
                <img src={logo} alt=""/>
            </div>
            <input type="checkbox" id="nav_check" hidden/>
            <nav>
                <div class="logo">
                    <img src={logo} alt=""/>
                </div>
                <ul>
                    <li>
                        <a href="http:localhost:3000/home">Inicio</a>
                    </li>
                    <li>
                        <a href="#ACTIVIDADES">Actividades</a>
                    </li>
                    <li>
                        <a href="#ABOUTUS">Nosotros</a>
                    </li>
                    <li>
                        <a href="#FOOTER">Contacto</a>
                    </li>
                    <li>
                        <a href="http:/localhost;3000/login">Registrer</a>
                    </li>
                </ul>
            </nav>
            <label for="nav_check" class="burger">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </main>
  )
}

export default Navbar;