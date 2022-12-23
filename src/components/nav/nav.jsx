import "../nav/nav.scss";
import {
  AiOutlineHome,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaProjectDiagram } from "react-icons/fa";
export default function navbar() {
  return (
    <div className="sidebar">
      <ul className="nav-list">
        <li>
          <a href="/">
            <i className="bx bx-grid-alt">
              <AiOutlineHome />
            </i>

            <span className="links_name">Inicio</span>
          </a>
          <span className="tooltip">Inicio</span>
        </li>
        <li>
          <a href="/AboutMe">
            <i className="bx bx-user">
              <SiAboutdotme />
            </i>
            <span className="links_name">Sobre mi</span>
          </a>
          <span className="tooltip">Sobre mi</span>
        </li>
        <li>
          <a href="Skills">
            <i className="bx bx-chat">
              <DiJavascript />
            </i>
            <span className="links_name">Habilidades</span>
          </a>
          <span className="tooltip">Habilidades</span>
        </li>
        <li>
          <a href="Proyects">
            <i className="bx bx-pie-chart-alt-2">
              <FaProjectDiagram />
            </i>
            <span className="links_name">Proyectos</span>
          </a>
          <span className="tooltip">Proyectos</span>
        </li>
        <li>
          <a
            href="https://github.com/carlos1-1"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-folder">
              <AiFillGithub />
            </i>
            <span className="links_name">Github</span>
          </a>
          <span className="tooltip">Github</span>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/carlos-g%C3%B3mez-057a0a24a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-cart-alt">
              <AiFillLinkedin />
            </i>
            <span className="links_name">LinkedIn</span>
          </a>
          <span className="tooltip">LinkedIn</span>
        </li>
        <li>
          <a
            href="mailto:carlosfrangomez@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bx-heart">
              <AiOutlineMail />
            </i>
            <span className="links_name">Correo</span>
          </a>
          <span className="tooltip">Correo</span>
        </li>
      </ul>
    </div>
  );
}
