import React from 'react'
import logo_dark from '../../../public/assets/images/logo_dark.png'
import logo_ligth from '../../../public/assets/images/logo_light.png'
import { useTheme } from "../../context/ThemeContext.jsx"
const Btn_logo = () => {
  const { theme } = useTheme();
  return (
    <>
     <button onClick={() => {
        const section = document.getElementById('home');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        }} className="logo_button" aria-label="Ir al inicio">
          {theme === 'light' ? (
                  <img src={logo_ligth} alt="LOGO"  />
                ) : (
                  <img src={logo_dark} alt="LOGO"  />
                )}
        
    </button>
    </>
  )
}

export default Btn_logo