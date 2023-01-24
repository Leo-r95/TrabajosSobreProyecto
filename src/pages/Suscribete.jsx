import React from "react";
import "../styles/suscribete.css";

const Suscribete = () => {
  return (
    <section className="fondo-suscribete">
      <div className="text-suscribete">
        <h1>SUSCRIBETE A NUESTROS SERVICIOS</h1>
      </div>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col borde-columna-suscribete">
            <div>
              <h4 className="color-ofertas">Gratuita</h4>
              <p className="color-precio">A$R 0,00</p>
            </div>

            <ul className="color-precio">
              <li>-Acceso permanente a nuestros programadas</li>
              <li>-Registro sin costo y sin tarjeta</li>
            </ul>
            <button type="button" class="btn btn-outline-secondary">
              Comienza AHORA!
            </button>
          </div>
          <div className="col borde-columna-suscribete">
            <div>
              <h4 className="color-ofertas">Mensual</h4>
              <p className="color-precio">A$R 3999,99</p>
            </div>
            <ul className="color-precio">
              <li>-Todo lo que incluye el servicio Gratis</li>
              <li>-Disfruta nuestra variedad de Actividades</li>
              <li>-Cancela cuando quieras</li>
            </ul>
            <button type="button" class="btn btn-outline-secondary">
              Comienza AHORA!
            </button>
          </div>
          <div className="col borde-columna-suscribete">
            <div>
              <h4 className="color-ofertas">Anual</h4>
              <p className="color-precio">A$R 27999,99</p>
            </div>
            <ul className="color-precio">
              <li>-Todo lo que incluye el Servicio Gratis y Mensual</li>
              <li>-Ahorra hasta A$R 20,000</li>
              <li>-Cancela cuando quieras</li>
            </ul>
            <button type="button" class="btn btn-outline-secondary">
              Comienza AHORA!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suscribete;
