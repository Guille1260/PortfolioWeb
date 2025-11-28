import React from "react";
import Typewriter from "typewriter-effect";
import code_black from "../../public/assets/icons/terminal_black.svg";
import code_white from "../../public/assets/icons/terminal_white.svg";
import Btn_theme from "../components/ui/Btn_theme.jsx";
import Btn_logo from "../components/ui/Btn_logo.jsx";
import Btn_languaje from "../components/ui/Btn_languaje.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import Btn_menu_movil from "../components/ui/Btn_menu_movil.jsx";
import Main_decoration from "../components/decoration/Main_decoration.jsx";
import { useTranslation } from "react-i18next";
import ruta from "../../public/assets/curriculum/Acuña_Guillermo_Cesar_IT.pdf"
const Home = () => {
  const {t} = useTranslation()
  const { theme } = useTheme();
  const oppositeTheme = theme === "dark" ? "light" : "dark";
  return (
    <>
      <section className="section_home" id="home">
        <div className="container_top">
          <div className="container_movil" id={theme}>
            <Btn_logo/>
            <Btn_menu_movil />
          </div>
          <div className="container_btns">
            <article
              className="container_btn_theme"
              data-aos-duration="2000"
              data-aos="fade-down"
            >
              <Btn_theme/>
            </article>
            <article className="container_languaje">
              <Btn_languaje/>
            </article>
          </div>
        </div>
        <div className="container_mid">
          <article
            className="container_greeting "
            data-aos="fade-right"
            data-aos-duation="2000"
          >
            <span>{t('greeting')}</span>
          </article>
          <article
            className="container_name "
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h1 className="h1_desck">Guillermo Acuña</h1>
          </article>
          <article
            className="container_rol"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={theme === "dark" ? code_white : code_black}
              alt="Ícono según tema"
            />
            {/* Texto de escritorio */}
            <h2 className="h2_desck" translate="no">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .typeString(t('role'))
                    .start(); 
                }}
                options={{
                  autoStart: true,
                  loop: false,
                }}
              />
            </h2>

            {/* Texto de móvil */}
            <h2 className="h2_movil text-center" translate="no">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(2000)
                    .typeString(t('role'))
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: false,
                }}
              />
            </h2>
          </article>
          <article
            className="container_cv"
            data-aos="flip-down"
            data-aos-duration="2000"
          >
           <a href={ruta}  download="Guillermo_IT.pdf">
              {t('download_cv')}
            </a>
          </article>
        </div>
        <div
          className="container_bot"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div class="hero_line"></div>

          <div
            className="mouse_button"
            title="Sobre mi"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight + 50,
                behavior: "smooth",
              });
            }}
          >
            <div className="mouse_scroller" id={oppositeTheme}>
              <i className="fa-solid fa-arrow-down"></i>
            </div>
          </div>

          <div class="hero_line hero_line_right"></div>
        </div>
        <Main_decoration />
      </section>
    </>
  );
};

export default Home;
