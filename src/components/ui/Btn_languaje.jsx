import React from "react";
import i18next from "i18next";

const Btn_languaje = () => {
  const changeLang = (lng) => {
    i18next.changeLanguage(lng);          
    localStorage.setItem("lang", lng);    
    window.location.reload();            
  };

  return (
    <>
      <button
        className={`btn_languaje_espanish ${
          i18next.language === "es" ? "active" : ""
        }`}
        data-aos="fade-down"
        data-aos-duration="2000"
        onClick={() => changeLang("es")}
        translate="no"
      >
        ES
      </button>

      <button
        className={`btn_languaje_english ${
          i18next.language === "en" ? "active" : ""
        }`}
        data-aos="fade-down"
        data-aos-duration="2000"
        onClick={() => changeLang("en")}
        translate="no"
      >
        EN
      </button>
    </>
  );
};

export default Btn_languaje;
