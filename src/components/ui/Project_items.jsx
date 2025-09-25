import React from "react";
import { useTranslation } from "react-i18next";
const Project_items = ({ nombre, p1, p2, skills = [], git, proyect, cover }) => {
  const { t } = useTranslation();
  return (
    <div className="item_projects" data-aos="zoom-in-up">
      <article className="project_box">
        {/* Imagen de portada dinámica */}
        <img
          src={cover || "/src/assets/images/default_cover.jpg"}
          alt={`Portada de ${nombre}`}
          className="cover_project"
        />
        <h3>{nombre}</h3>
        <div className="project_text">
          <p className="parrafo">{p1}</p>
          <p className="parrafo">{p2}</p>
        </div>
      </article>

      <article className="project_details">
        {/* Skills dinámicas */}
        <div className="projects_icon">
          {skills.map((skill, index) => (
            <img
              key={index}
              src={skill.src}
              alt={skill.alt || "icono"}
              className="skill_icon"
              title={skill.alt}
            />
          ))}
        </div>

        {/* Botones dinámicos */}
        <article className="container_links">
          <div className="btns_links">
            {git && (
              <a
                href={git}
                target="_blank"
                rel="noopener noreferrer"
                className="projects_button"
              >
                {t("projects.btnGit")}
              </a>
            )}
          </div>
          <div className="btns_links">
            {proyect && (
            <a
              href={proyect}
              target="_blank"
              rel="noopener noreferrer"
              className="projects_button"
            >
              {t("projects.btnProject")}
            </a>
          )}
          </div>
        </article>
      </article>
    </div>
  );
};

export default Project_items;
