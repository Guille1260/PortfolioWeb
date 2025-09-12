import React, { useState } from 'react';
import Menu_desck from './Menu_desck';
import Social_media from './Social_media';
import { useTheme } from "../../context/ThemeContext.jsx";
import Btn_logo from '../ui/Btn_logo.jsx';
import Number from '../decoration/Number.jsx';
const Main_header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const oppositeTheme = theme === 'dark' ? 'light' : 'dark';
  function handleClick() {
    setIsMenuOpen(prev => !prev);
  }
  // Nueva función para cerrar el menú
  function handleCloseMenu() {
    setIsMenuOpen(false);
  }
  return (
    <header className={`container_header ${isMenuOpen ? 'open_menu_desck' : ''}`} id={theme}>
      <article className='container_left'>
        <Menu_desck closeMenu={handleCloseMenu} />
        <div class="navigation_container"> 
          <span class="navigation_background" >MENU</span> 
          <div class="navigation_halo"> 
            <div class="navigation_ring "> 
              <div class="navigation_circle"></div> 
            </div> 
          </div> 
          <span class="navigation_line" ></span> 
          <div class="navigation_decoration"> 
            <span class="navigation_streak"></span> 
            <span class="navigation_diamond"></span> 
          </div> 
          <Number/>
        </div>
        
      </article>
      <article className='container_right'>
        <article className="container_logo"  data-aos="fade-right" data-aos-duration="2000">
         <Btn_logo/>
        </article>
        <article className="container_redes">
          <Social_media />

          <article className='container_line' data-aos="fade-up" data-aos-duration="2000" ></article>
        </article>
      </article>
      <article className="container_btn_menu_desck" >
        <button className={`btn_menu_desck ${isMenuOpen ? 'open_menu_desck' : ''}`} onClick={handleClick} id={oppositeTheme} >
          <span className="btn_Navigation_line_top" id={theme}></span>
          <span className="btn_Navigation_line_bottom" id={theme}></span>
        </button>
      </article>
    </header>
  );
};

export default Main_header;