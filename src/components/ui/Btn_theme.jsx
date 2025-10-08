import React from 'react';
import sun from '../../../public/assets/icons/sun.svg';
import moon from '../../../public/assets/icons/moon.svg';
import { useTheme } from '../../context/ThemeContext'; 

const Btn_theme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className='btn_theme' onClick={toggleTheme}  >
      {theme === 'light' ? (
        <img src={moon} alt="Claro" />
      ) : (
        <img src={sun} alt="Oscuro" />
      )}
      
    </button>
  );
};

export default Btn_theme;

