import "../About me/aboutMe.scss";
import Rocket from "../Rocket/rocket";

export default function AboutMe() {
  const text = "Presentación";
  return (
    <div className="about-me">
      <Rocket />

      <div className="about-me-text">
        {text.split("").map((letter, index) => (
          <span key={index} className="bouncing-text">
            {letter}
          </span>
        ))}
      </div>
      <img
        src="https://res.cloudinary.com/dzisahecp/image/upload/v1671652691/pf_m6yuyq_qjqqcm.png"
        alt="Globo"
      />
      <div className="description">
        <p>
          ¡Hola! Mi nombre es Carlos y soy un programador fullstack con
          habilidades en una amplia gama de tecnologías, incluyendo JavaScript,
          HTML, CSS, frameworks como React y Node.js. Me encanta trabajar en
          proyectos innovadores y siempre estoy buscando nuevas maneras de
          mejorar mis habilidades y conocimientos en el campo de la tecnología.
          Si buscas un programador fullstack dedicado, con capacidad de
          adaptación y determinado a mejorar continuamente sus habilidades, ¡no
          dudes en ponerte en contacto conmigo!
        </p>
      </div>
    </div>
  );
}
