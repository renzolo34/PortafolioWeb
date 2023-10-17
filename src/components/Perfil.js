import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import crudNode from "../assets/img/crudNode.jpg";
import pokeApp from "../assets/img/pokeApp.webp";
import ecomercer from "../assets/img/ecomerce.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Perfil = () => {
  const projects = [
    {
      title: "Crud Node",
      description: "Desarrollo de Software",
      imgUrl: crudNode,
    },
    {
      title: "Poke App",
      description: "Desarrollo Web",
      imgUrl: pokeApp,
    },
    {
      title: "Ecommerce",
      description: "Desarrollo App Tienda",
      imgUrl: ecomercer,
    },
  ];

  return (
    
    <section className="project" id="projects">
      <div>
        <h2>Perfil profesional</h2>
        <p>
          Mi enfoque es la mejora continua y la adopción de las últimas
          tendencias tecnológicas para ofrecer buenos resultados, permitiendo
          realizar software escalable haciendo uso de metodologías ágiles.
          Además, cuento con habilidades en la gestión de proyecto y buen
          trabajo en equipo. <a href="https://drive.google.com/file/d/1Ohz1tgUAroI3QHx0CfGPyvfaB8no-VWL/view?usp=sharing"> CV - Descarga</a>
        </p>
        
      </div>
    </section>
  );
};
