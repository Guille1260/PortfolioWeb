import React from "react";
import Project_items from "../components/ui/Project_items";
import { useTranslation } from "react-i18next";

import deltaCover from "../../public/assets/images/delta_sport.jpg";
import bootstrapIcon from "../../public/assets/skills/bootstrap.svg";
import jsIcon from "../../public/assets/skills/javascript.svg";
import cssIcon from "../../public/assets/skills/css_old.svg";
import htmlIcon from "../../public/assets/skills/html5.svg";

// Configuración de proyectos (cada uno con sus propias skills, git y proyect)
const projectsConfig = [
  {
    key: "deltaSport1",
    cover: deltaCover,
    skills: [
      { src: bootstrapIcon, alt: "Bootstrap" },
      { src: jsIcon, alt: "Javascript" },
      { src: cssIcon, alt: "CSS" },
      { src: htmlIcon, alt: "HTML5" }
    ],
    git: "https://github.com/Guille1260/TF-JS-Coder.git",
    proyect: "https://guille1260.github.io/TF-JS-Coder/"
  },
  // {
  //   key: "deltaSport2",
  //   cover: deltaCover,
  //   skills: [
  //     { src: jsIcon, alt: "Javascript" }
  //   ],
  //   git: "https://github.com/Guille1260/AnotherProject.git",
  //   proyect: "https://guille1260.github.io/AnotherProject/"
  // }
];
const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="section_projects" id="projects">
      <div className="container_projects">
        <article className="container_title">
          <h2 data-aos="zoom-in-up">{t("projects.title")}</h2>
          <h3 data-aos="zoom-in-up">{t("projects.subtitle")}</h3>
        </article>
        <article className="container_boxs">
          <article className="conteiner_projects">
           {projectsConfig.map(({ key, cover, skills, git, proyect }) => {
              const project = t(`projects.${key}`, { returnObjects: true });
              return (
                <Project_items
                  key={key}
                  nombre={project.nombre}
                  p1={project.p1}
                  p2={project.p2}
                  cover={cover}
                  skills={skills}
                  git={git}
                  proyect={proyect}
                />
              );
            })}
          </article>
        </article>
      </div>
    </section>
  );
};

export default Projects;
