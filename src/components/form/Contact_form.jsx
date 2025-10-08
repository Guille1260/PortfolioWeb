import React from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact_form = () => {
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( "service_11fll9e", "template_xfrgvea", e.target,"HKIQWDusQnjHNWicM" )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Tu mensaje se ha enviado correctamente.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5a4848ff",
            background: "#424242",       
            color: "#fffdfdff",
          });
          e.target.reset(); 
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5a4848ff",
            background: "#424242",       
            color: "#333",
          });
        }
      );
  };
  return (
    <>
      <form onSubmit={sendEmail}>
        <div data-aos="fade-left" data-aos-duration="1000">
          <label htmlFor="fullname">{t("contact.form.nameLabel")}</label>
          <input id="fullname" name="fullname" type="text" placeholder={t("contact.form.namePlaceholder")} autoComplete="off" required />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <label htmlFor="email">{t("contact.form.emailLabel")}</label>
          <input id="email" name="email" type="email" placeholder={t("contact.form.emailPlaceholder")} autoComplete="off" required />
        </div>
        <div className="textarea_container" data-aos="fade-left" data-aos-duration="1000">
          <label htmlFor="message">{t("contact.form.messageLabel")}</label>
          <textarea id="message" name="message" placeholder={t("contact.form.messagePlaceholder")} rows="10" required ></textarea>
        </div>
        <div className="contac_button" data-aos="fade-left" data-aos-duration="1000" >
          <button type="submit">
            <span>{t("contact.form.sendButton")}</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact_form;
