import React from 'react';
import { useTranslation } from 'react-i18next';

const Menu_desck = ({ closeMenu }) => {
  const { t } = useTranslation()
  const handleNavigation = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="container_menu_desck">
      <ul className='menu_desck'>
        <li className='li_1'><button onClick={() => handleNavigation('home')}     className='link_menu_desck'  >{t('menu.home')}</button></li>
        <li className='li_2'><button onClick={() => handleNavigation('aboutme')}  className='link_menu_desck'  >{t('menu.aboutme')}</button></li>
        <li className='li_3'><button onClick={() => handleNavigation('services')}  className='link_menu_desck' >{t('menu.services')}</button></li>
        <li className='li_4'><button onClick={() => handleNavigation('skills')} className='link_menu_desck'    >{t('menu.skills')}</button></li>
        <li className='li_5'><button onClick={() => handleNavigation('projects')}  className='link_menu_desck' >{t('menu.projects')}</button></li>
        <li className='li_6'><button onClick={() => handleNavigation('certificates')}  className='link_menu_desck' >{t('menu.certificates')}</button></li>
        <li className='li_7'><button onClick={() => handleNavigation('contact')}  className='link_menu_desck' >{t('menu.contact')}</button></li>
      </ul>
    </nav>
  );
};

export default Menu_desck;
