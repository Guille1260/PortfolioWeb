import React, { useEffect } from 'react'
import avatar from '../../public/assets/images/avatar_contact.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";
const About_me = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      mirror: true,
      once: false, 
    });
     AOS.refresh();
  }, []);
  const {t} = useTranslation()
  return (
    <>
    <section className="section_about_me" id='aboutme' >
            {/* <div class="about__background"> 
              <img src="/src/assets/extra/code.svg" alt="" loading="lazy"/> 
              
            </div> */}
            <div className="container_about_me">
                 <article className='container_image' data-aos="fade-right"   data-aos-duration="2000" >
                     <img src={avatar} alt="MI_FOTO"  />
                 </article>
                 <article className='container_info' >
                    <h2 className="title_section" data-aos="fade-up-left"  data-aos-duration="1500">
                        {t('menu.aboutme')}
                    </h2>
                    <spam data-aos="fade-up-left"  data-aos-duration="2000">{t("aboutme.title")}</spam>
                    <p data-aos="fade-left">
                      {t("aboutme.paragraph1")}
                    </p>
                    <p data-aos="fade-left">
                      {t("aboutme.paragraph2")}
                    </p>
                 </article>
            </div>
        </section>
        
    </>
  )
}

export default About_me
