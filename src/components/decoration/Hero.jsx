import React from 'react'
import { useTheme } from "../../context/ThemeContext.jsx";
const Hero = () => {
    const { theme } = useTheme();
  return (
    <>
        <div class="hero__backtext" id= { theme === 'dark' ? 'texto_blanco' : 'texto_negro' } data-aos="fade-right" data-aos-duation="2000" >
                  developer
                  <br/>
                  sofware
        </div>
    </>
  )
}

export default Hero
