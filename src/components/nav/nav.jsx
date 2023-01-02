import "../nav/nav.scss";
import {
  AiOutlineHome,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaProjectDiagram } from "react-icons/fa";
import React from "react";

export default function Nav() {
  const toggleMenu = () => {
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector(".toggle");
    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
  };

  return (
    <div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">
              <span className="icon">
                <AiOutlineHome />
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="title">Inicio</span>
            </a>
          </li>
          <li>
            <a href="/AboutMe">
              <span className="icon">
                <SiAboutdotme />
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="title">Sobre mi</span>
            </a>
          </li>
          <li>
            <a href="/Skills">
              <span className="icon">
                <DiJavascript />
                <i className="fa fa-comment" aria-hidden="true"></i>
              </span>
              <span className="title">Habilidades</span>
            </a>
          </li>
          <li>
            <a href="Proyects">
              <span className="icon">
                <FaProjectDiagram />
                <i className="fa fa-question-circle" aria-hidden="true"></i>
              </span>
              <span className="title">Proyectos</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/carlos1-1"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <AiFillGithub />
                <i className="fa fa-cog" aria-hidden="true"></i>
              </span>
              <span className="title">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/carlos-g%C3%B3mez-057a0a24a/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <AiFillLinkedin />
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              <span className="title">Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:carlosfrangomez@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="icon">
                <AiOutlineMail />
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </span>
              <span className="title">Correo</span>
            </a>
          </li>
        </ul>
      </div>
      <AiOutlineMenuUnfold className="toggle" onClick={toggleMenu} />
    </div>
  );
}
