import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import data from '../../public/assets/certificates/Data_Analytics.png'
import tableau from '../../public/assets/certificates/Tableau.png'
import excel from '../../public/assets/certificates/Procesamiento_de_datos_en_Excel.png'
import sql from '../../public/assets/certificates/SQL.png'
import back2 from '../../public/assets/certificates/Backend2.png'
import back1 from '../../public/assets/certificates/Backend1.png'
import js from '../../public/assets/certificates/JavaScript.png'
import python from '../../public/assets/certificates/Python.png'
import web from '../../public/assets/certificates/DesarrolloWeb.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const certificates = [
  { id: 1, img: data, alt: "Data Analytics" },
  { id: 2, img: tableau, alt: "Tableau" },
  { id: 3, img: excel, alt: "Excel" },
  { id: 4, img: sql, alt: "SQL" },
  { id: 5, img: back2, alt: "Backend 2" },
  { id: 6, img: back1, alt: "Backend 1" },
  { id: 7, img: js, alt: "JavaScript" },
  { id: 8, img: python, alt: "Python" },
  { id: 8, img: web, alt: "Web" },
];

const Certificates = () => {
  const {t} = useTranslation()
  return (
    <section className="section_certificates" id="certificates">
      <div className="container_certificates">
        <article className="container_title">
          <h2 data-aos="zoom-in-up">{t("certificates.title")}</h2>
          <h3 data-aos="zoom-in-up">{t("certificates.subtitle")}</h3>
        </article>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          simulateTouch={true}   
          grabCursor={true}      
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 }, 
            1024: { slidesPerView: 2 }, 
          }}
          className="container_card" data-aos="zoom-in-up" data-aos-duation="2000"
        >
          {
            certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="certificate" data-aos="zoom-in-up" title="puedes arrastrar para pasar" >
                <img src={cert.img} alt={cert.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
