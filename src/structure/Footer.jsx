import React from "react";
import "./footer.css";
import '../img/logosrrss/logos/fonts.css';
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="pie-pagina" id="FOOTER">
        <div className="grupo-1">
            <div className="box">
              <figure>
                <a href="...">
                <img className="logoFooter" src={logo} alt="Logo" />
                </a>
              </figure>
            </div>
            
            <div className="box">
              <h2>CONTACTANOS</h2>
              <div className="form">
                <form action="">
                  <input type="text" name="Name" placeholder="Name" />
                  <input type="text" name="Surname" placeholder="Surname" />
                  <input type="text" name="E-mail" placeholder="E-mail" />
                  <textarea name="Message" placeholder="Message"></textarea>
                  <input type="button" className="Boton" value="Send" />
                </form>
              </div>
            </div>
            
            <div className="box">
              <h2>SIGUENOS</h2>
              <div className="red-social espacio">
                <a href="https://www.facebook.com/" rel="noreferrer" target={"_blank"} class="icon icon-facebook">
                </a>
                <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"} class="icon icon-instagram">
                </a>
                <a href="https://twitter.com/" rel="noreferrer" target={"_blank"} class="icon icon-twitter">
                </a>
                <a href="https://www.youtube.com/" rel="noreferrer" target={"_blank"} class="icon icon-youtube">
                </a>
              </div>
              <div className="miniNav">
                <h2>NAVEGA</h2>
                <a href="http:localhost:3000/home">Inicio</a>
                <a href="#ACTIVIDADES">Actividades</a>
                <a href="#ABOUTUS">Nosotros</a>
                <a href="http:/localhost;3000/login">Registrate/Login</a>
              </div>
            </div>
        </div>

      <div className="grupo-2">
        <small>&copy; 2023 - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
