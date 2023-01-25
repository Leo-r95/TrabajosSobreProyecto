import React from "react";
import "../styles/style.css";
import Calistenia from "../img/ImgActivities/Calistenia.jpg";
import Crossfit from "../img/ImgActivities/CROSSFIT.jpg";
import Funcional from "../img/ImgActivities/FUNCIONAL.jpg";
import mma from "../img/ImgActivities/MMA.avif";
import Natacion from "../img/ImgActivities/Natacion.jpg";
import Pesasymaquinas from "../img/ImgActivities/PesasyMaquinasdeGym.jpg";
import Spinning from "../img/ImgActivities/Spinning.jpg";
import Zumba from "../img/ImgActivities/Zumba.jpg";
import Montañismo from "../img/ImgActivities/Montañismo.jpg";

const ActivitiesSlider = () => {
  return (
    <section id="ACTIVIDADES">

      <div className="d-flex justify-content-center letras"><h1>Sumate a nuestras actividades</h1></div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div class="clearfix">
              <img
                src={Calistenia}
                class="col-md-6 float-md-start mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">Calistenia</h3>
              <p className="letras">
                es un sistema de entrenamiento con ejercicios físicos que se
                realizan con el propio peso corporal
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Crossfit}
                class="col-md-6 float-md-end mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">Crossfit</h3>
              <p className="letras">
                técnica de entrenamiento que conecta movimientos de diferentes
                disciplinas, tales como la halterofilia, el entrenamiento
                metabólico o el gimnástico.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Funcional}
                class="col-md-6 float-md-start mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">ENTRENAMIENTO FUNCIONAL</h3>
              <p className="letras">
                se basa en realizar ejercicios que se adaptan a los movimientos
                naturales del cuerpo humano para trabajar de forma global
                músculos y articulaciones.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Natacion}
                class="col-md-6 float-md-end mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">NATACION</h3>
              <p className="letras">
                es la habilidad que permite al ser humano desplazarse en el
                agua, gracias a la acción propulsora realizada por los
                movimientos rítmicos, repetitivos y coordinados de los miembros
                superiores, inferiores y el cuerpo.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Pesasymaquinas}
                class="col-md-6 float-md-start mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">PESAS</h3>
              <p className="letras">
                El entrenamiento con pesas es un tipo de entrenamiento de fuerza
                en el que se utilizan pesas para desarrollar resistencia
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Spinning}
                class="col-md-6 float-md-end mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">Spinning</h3>
              <p className="letras">
                consiste en la realización de ejercicios sobre la bicicleta,
                compaginándolos con la música y efectuando coreografías,
                fundamentalmente buscando la diversión del público asistente, al
                mismo tiempo que trabaja a nivel global la tonificación del
                tronco y las extremidades superiores junto con un importante
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={mma}
                class="col-md-6 float-md-start mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">ARTES MARCIALES MIXTAS</h3>
              <p className="letras">
                son la combinación de técnicas provenientes de distintas artes
                marciales y deportes de combate, generalmente se usa para la
                competición en el deporte de combate pero también para la
                defensa personal.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Montañismo}
                class="col-md-6 float-md-end mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">Montañismo</h3>
              <p className="letras">
                Se trata de la disciplina, en general deportiva o recreativa,
                que consiste en la realización del ascenso y descenso de
                montañas.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div class="clearfix">
              <img
                src={Zumba}
                class="col-md-6 float-md-start mb-3 ms-md-3 d-block w-50 slider"
                alt="..."
              />
              <h3 className="letras">Zumba</h3>
              <p className="letras">
                es un movimiento o disciplina fitness de origen colombiano,
                enfocado por una parte a mantener un cuerpo saludable y por otra
                a desarrollar, fortalecer y dar flexibilidad al cuerpo mediante
                movimientos de baile combinados con una serie de rutinas
                aeróbicas.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default ActivitiesSlider;
