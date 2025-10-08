import { useEffect } from "react";
import Skill_logo from "../components/ui/Skill_logo.jsx";
import Aos from "aos";
import { useTranslation } from "react-i18next";
import html from '/assets/skills/html5.svg'
import js from '/assets/skills/javascript.svg';
import CSS from '/assets/skills/css_old.svg'
import react from '/assets/skills/React_light.svg'
import Bootstrap from '/assets/skills/bootstrap.svg'
import Cplus from '/assets/skills/c-plusplus.svg'
import Python from '/assets/skills/python.svg'
import Django from '/assets/skills/django.svg'
import MySQ from '/assets/skills/mysql.svg'
import Java from '/assets/skills/java.svg'
import MongoDB from '/assets/skills/mongodb.svg'
import Nodejs from '/assets/skills/node-js.svg'
import Postman from '/assets/skills/postman.svg'
const Skills = () => {
  const { t } = useTranslation();
  const skillsData = {
    Frontend: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: js },
      { name: "React", icon: react },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "C++", icon: Cplus }
    ],
    Backend: [
      { name: "Python", icon: Python },
      { name: "Django", icon: Django },
      { name: "MySQL", icon: MySQ },
      { name: "Java", icon: Java },
      { name: "Node.js", icon: Nodejs },
      { name: "MongoDB", icon: MongoDB }
    ]
  };
  useEffect(() => {
    Aos.init({ duration: 1000, mirror: true, once: false, offset: 0 });
    Aos.refresh();
  }, []);
  return (
    <section className="section_skills" id="skills">
      <div className="container_skills">
        <article className="container_title">
          <h2 data-aos="zoom-in-up">{t("skills.title")}</h2>
          <h3 data-aos="zoom-in-up">{t("skills.subtitle")}</h3>
        </article>

        <article className="container_herramientas">
          {Object.entries(skillsData).map(([category, skillList], i) => (
            <div  key={category} className="skills_group"  data-aos={i === 0 ? "fade-down-right" : "fade-down-left"} data-aos-duration="5000" >
              {skillList.map((skill) => (
                <Skill_logo key={skill.name} name={skill.name} icon={skill.icon} data-aos="flip-left"/>
              ))}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Skills;
