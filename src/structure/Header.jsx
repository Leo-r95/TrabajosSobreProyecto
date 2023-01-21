import React from "react";
import Homepage from "../pages/Homepage";
import Navbar from "../pages/Navbar";
import "./header.css";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col centrar"><h1 className="titulo">FULL STACK GYM</h1></div>
          <div className="col">
            <h3 className="text">
              "Tu sueñas. Tu planeas. Tu alcanzas. Habra obstaculos. Habra
              escepticos. Habra errores. Pero con el trabajo duro, con
              conviccion y con confianza en ti mismo y de los que te rodean, no
              hay limites." 
            </h3>
            <h3 className="autor">Michael Phelps</h3>
          </div>
        </div>
      </div>
      <Homepage />
    </>
  );
};

export default Header;
