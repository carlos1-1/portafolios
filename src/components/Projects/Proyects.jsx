import "../Projects/Proyects.scss";
import { useState } from "react";

export default function Proyects() {
  const [mostrarCuadroFlotante, setMostrarCuadroFlotante] = useState(false);
  const [mostrarCuadroFlotante1, setMostrarCuadroFlotante1] = useState(false);
  const [mostrarCuadroFlotante2, setMostrarCuadroFlotante2] = useState(false);

  const Cuadro = (number) => {
    number === 0
      ? setMostrarCuadroFlotante(true)
      : setMostrarCuadroFlotante(false);
    number === 1
      ? setMostrarCuadroFlotante1(true)
      : setMostrarCuadroFlotante1(false);
    number === 2
      ? setMostrarCuadroFlotante2(true)
      : setMostrarCuadroFlotante2(false);
    if (number === "no") {
      setMostrarCuadroFlotante(false);
      setMostrarCuadroFlotante1(false);
      setMostrarCuadroFlotante2(false);
    }
  };

  return (
    <section id="project">
      <div className="project-container">
        <div className="project-box">
          <img
            id="a"
            src="https://res.cloudinary.com/dzisahecp/image/upload/v1671683945/0223a904d26d9f02109ec8880ac02642_memofc.jpg"
            alt="Dogs"
            onClick={() => Cuadro(1)}
          />
          <h1>API Dogs</h1>
          {mostrarCuadroFlotante1 && (
            <div className="mi-componente">
              <button className="btn-flot" onClick={() => Cuadro("no")}>
                X
              </button>
              <img
                src="https://res.cloudinary.com/dzisahecp/image/upload/v1671683945/0223a904d26d9f02109ec8880ac02642_memofc.jpg"
                alt="Dogs"
              />
              <p>
                Single-page application creada usando la api de perros, consta
                de un catálogo de razas con la opción de crear nuevas,
                filtrarlas por diversas características, una barra de búsqueda y
                paginado. Fue hecha de manera individual tanto en el lado del
                back como del front. La duración del proyecto fue de alrededor
                de 3 semanas y forma parte de mi "proyecto individual" con el
                cuál aprobé una de mis últimas etapas de bootcamp.
              </p>
              <h5>
                Tecnologias:· JavaScript · React.js · Redux.js · Sequelize.js ·
                Node.js · Express.js · HTML · Bootstrap · GitHub
              </h5>
              <a
                className="btn-flot-view"
                href="https://youtu.be/8-1KlZ1Nv3s"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver
              </a>
            </div>
          )}
        </div>
        <div className="project-box">
          <img
            id="a"
            src="https://res.cloudinary.com/dzisahecp/image/upload/v1671668049/bcba721d3db1f53fd30efc1ff8550a07_ll3woi.jpg"
            alt="FoodExpress"
            onClick={() => Cuadro(0)}
          />
          <h1>FoodExpress</h1>
          {mostrarCuadroFlotante && (
            <div className="mi-componente">
              <button className="btn-flot" onClick={() => Cuadro("no")}>
                X
              </button>
              <img
                src="https://res.cloudinary.com/dzisahecp/image/upload/v1671668049/bcba721d3db1f53fd30efc1ff8550a07_ll3woi.jpg"
                alt="FoodExpress"
              />
              <p>
                Proyecto Final (Henry)creado en equipo y con la metodología
                scrum, consta de una página de pedidos de comida, con un login
                incluido además de pasarelas de pago, carrito de compras(con
                información persistente) y un admin dashboard. Como admin es
                posible crear nuevos productos, cargar imágenes directamente del
                ordenador(Cloudinary) y mantener un control de usuarios, ya sea
                con la opción de inhabilitar cuentas o eliminarlas.
              </p>
              <h5>
                Tecnologias:· JavaScript · React.js · Redux.js · Sequelize.js ·
                Node.js · Express.js · HTML · Bootstrap · GitHub
              </h5>
              <a
                className="btn-flot-view"
                href="https://github.com/carlos1-1/FoodExpressPF-client"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend
              </a>
              <a
                className="btn-flot-view"
                href="https://github.com/carlos1-1/FoodExpressPF-back"
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend
              </a>
            </div>
          )}
        </div>
        <div className="project-box">
          <img
            id="a"
            src="https://res.cloudinary.com/dzisahecp/image/upload/v1671668123/04fa5b197651f32eda20d90bb7603a1d_aqjhkk.png"
            alt="Portfolio"
            onClick={() => Cuadro(2)}
          />
          <h1>Portfolio</h1>
          {mostrarCuadroFlotante2 && (
            <div className="mi-componente">
              <button className="btn-flot" onClick={() => Cuadro("no")}>
                X
              </button>
              <img
                src="https://res.cloudinary.com/dzisahecp/image/upload/v1671668123/04fa5b197651f32eda20d90bb7603a1d_aqjhkk.png"
                alt="Portfolio"
              />
              <p>
                Portfolio personal creado bajo la temática "la vista en el
                cielo", consta de un diseño relacionado con el espacio,
                animaciones con SCSS(El cual decidí aprender mientras
                planificaba este proyecto) y un manejo de información por medio
                de rutas. Su creación, incluyendo la etapa de planificación
                anterior a comenzar el código, duro alrededor de los 12 días.
                Actualmente se encuentra listo para ser presentado pero aun con
                futuras actualizaciones de funcionalidades y diseño
              </p>
              <h5>
                Tecnologias:· JavaScript · React.js · HTML · SASS · GitHub
              </h5>
              <a
                className="btn-flot-view"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
