import React from 'react'
import { useTranslation } from "react-i18next";
const Main_sidebar = () => {
  const {t} = useTranslation()
  return (
    <>  
        <aside className="container_sidebar">
          <div class="sidebar_left" data-aos="fade-up" data-aos-duration="2000" > 
                <span class="sidebar_dot"></span>
                <span class="sidebar_email" >{t('role')}</span>
                <span class="sidebar_line"></span>
          </div>
          <div class="sidebar_right ">
             <div class="sidebar_bg"></div> 
          </div>
        </aside>
    </>
  )
}

export default Main_sidebar;
