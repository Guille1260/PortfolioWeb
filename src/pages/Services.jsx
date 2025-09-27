import React from "react";
import Card_services from "../components/ui/Card_services";
import { useTranslation } from "react-i18next";

import userIcon from "../../public/assets/icons/users.svg";
import puzzleIcon from "../../public/assets/icons/puzzle.svg";
import trendingUpIcon from "../../public/assets/icons/rotate_right.svg";
import badgeIcon from "../../public/assets/icons/award.svg";
import clockIcon from "../../public/assets/icons/clock.svg";
import rocketIcon from "../../public/assets/icons/rocket.svg";

const servicesConfig = [
  { key: "teamwork", icon: userIcon },
  { key: "problemSolving", icon: puzzleIcon },
  { key: "adaptability", icon: trendingUpIcon },
  { key: "quality", icon: badgeIcon },
  { key: "timelyDelivery", icon: clockIcon },
  { key: "businessValue", icon: rocketIcon }
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="section_services" id="services">
      <article className="container_title">
        <h2 data-aos="zoom-in-up">{t("services.title")}</h2>
        <h3 data-aos="zoom-in-up">{t("services.subtitle")}</h3>
      </article>

      <article className="container_services">
        <div className="container_card" data-aos="zoom-in-up"  data-aos-duration="5000">
          {servicesConfig.map(({ key, icon }) => (
            <Card_services
              key={key}
              image={icon}
              title={t(`cards.${key}.title`)}
              description={t(`cards.${key}.description`)}
              data-aos="flip-left" data-aos-duration="5000"
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Services;
