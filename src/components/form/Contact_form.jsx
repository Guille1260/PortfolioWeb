import React from "react";
import { useTranslation } from "react-i18next";
const Contact_form = () => {
  const { t } = useTranslation();
  return (
    <>
      <form action="">
        <div data-aos="fade-left" data-aos-duration="1000">
          <label htmlFor="fullname">{t("contact.form.nameLabel")}</label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder={t("contact.form.namePlaceholder")}
            autoComplete="off"
          />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000">
          <label htmlFor="email">{t("contact.form.emailLabel")}</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder={t("contact.form.emailPlaceholder")}
            autoComplete="off"
          />
        </div>
        <div
          className="textarea_container"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <label htmlFor="message">{t("contact.form.messageLabel")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("contact.form.messagePlaceholder")}
            rows="10"
          ></textarea>
        </div>

        <div
          className="contac_button"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <button>
            <span>{t("contact.form.sendButton")}</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact_form;
