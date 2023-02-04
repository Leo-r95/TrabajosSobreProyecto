import React from "react";
import "../styles/aboutus.css";
import Damian from "../img/fotosnuestras/Damian.jpg";
import Gonzalo from "../img/fotosnuestras/Gonzalo.jpeg";
import Leonel from "../img/fotosnuestras/Leonel.jpeg";

const AboutUs = () => {
  return (
    <section className="aboutuscolor" id="ABOUTUS">
      <div className="tituloabout background"><h1>Coaches</h1></div>
      <div className="clearfix background">
        <h2>Gonzalo Quiroga</h2>
        <img
          src={Gonzalo}
          className="col-md-6 float-md-start mb-3 ms-md-3 tamaño box"
          alt="..."
        />

        <p>
        Para ser tu personal trainer vamos a comenzar a trabajar en mejorar tu salud y bienestar. Investigaremos los objetivos de cada cliente para poder planificar diferentes actividades y lograr su objetivo. Para dicha planificación, a menudo vamos a en cuenta la salud general, estilo de vida y la nutrición del cliente para maximizar toda las áreas.
        </p>
      </div>
      <div className="clearfix background">
        <h2>Damian Gomez</h2>
        <img
          src={Damian}
          className="col-md-6 float-md-end mb-3 ms-md-3 tamaño box"
          alt="..."
        />

        <p>
        Personal trainer con Grado en Ciencias de la Actividad Fisica y Deportes al aire libre, impartiendo diversas especialidades tanto grupales como individuales. Conocimientos de Fisioterapia y Rehabilitacion.
        </p> 

      </div>
      <div className="clearfix background">
        <h2>Leonel Ros</h2>
        <img
          src={Leonel}
          className="col-md-6 float-md-start mb-3 ms-md-3 tamaño box"
          alt="..."
        />

        <p>
        Fui personal trainer durante mas de 5 años, tengo experciencia y estoy totalmente capacitado en los aspectos orientados a crossfit y entrenamiento funcional. Ademas de proporciones consejos y recomendaciones sobre habitos dieteticos para el progreso de los clientes.
        </p>

      </div>
    </section>
  );
};

export default AboutUs;
