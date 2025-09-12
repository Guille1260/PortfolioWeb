import React from 'react'
import gitHub from '../../../public/assets/icons/github_black.svg'
import linkedin from '../../../public/assets/icons/linkedin_black.svg'
import gitHub_white from '../../../public/assets/icons/github_white.svg'
import linkedin_white  from '../../../public/assets/icons/linkedin_white.svg'
import { useTheme } from "../../context/ThemeContext.jsx";

const Social_media = () => {
    const { theme } = useTheme();
  return (
    <>
        <ul className="menu_redes">
            <li data-aos="fade-right" data-aos-duation="2000">
                <a href="https://github.com/Guille1260" target="_blank" rel="noopener noreferrer" className="link_social_media">
                    <img src={ theme === 'dark' ? gitHub_white : gitHub} alt="Ícono según tema"/>
                </a>
            </li>
            <li data-aos="fade-right" data-aos-duation="2000">
                <a href="https://www.linkedin.com/in/guillermo-cesar-acuña-b04274295" target="_blank" rel="noopener noreferrer" className="link_social_media">
                   <img src={ theme === 'dark' ? linkedin_white : linkedin} alt="Ícono según tema"/>
                </a>
            </li>
           
        </ul>
    </>
  )
}

export default Social_media
