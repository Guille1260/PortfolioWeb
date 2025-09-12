import React from 'react'

import Contact_form from '../components/form/Contact_form'
import gmail from '../../public/assets/skills/gmail.svg'
import linkedin from '../../public/assets/icons/linkedin_color.svg'
import avatar from '../../public/assets/images/avatar_contact.svg'
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
    <section className="section_contact" id="contact">
        <div className="container_contact">
            <article className="contact_left" >
               <article className="container_title">
                <h2 data-aos="fade-right" data-aos-duration="2000">{t("contact.title")}</h2>
                <h3 data-aos="fade-right" data-aos-duration="2000">{t("contact.subtitle")}</h3>
              </article>
                <article className="container_info" >
                  <div className='container_avatar' data-aos="fade-right" data-aos-duration="2000">
                    <img src={avatar} alt="" />
                  </div>
                  
                  <div className="container_redes"data-aos="fade-right" data-aos-duration="2000" >
                    <a href="" > <img src={gmail} alt="" /></a>
                    <a href="https://www.linkedin.com/in/guillermo-cesar-acuña-b04274295" target="_blank" rel="noopener noreferrer">
                      <img src={linkedin} alt="LinkedIn" />
                    </a>

                  </div>
                  
                </article>
            </article>
            <article className="contact_right" >
              <Contact_form/>
            </article>
            
        </div>
        
    </section>
    </>
  )
}

export default Contact
