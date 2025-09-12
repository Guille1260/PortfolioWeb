import React from 'react'
import Btn_logo from './Btn_logo'
import Menu_desck from '../header/Menu_desck'
import Social_media from '../header/Social_media'
import { useTheme } from "../../context/ThemeContext";
const Btn_menu_movil = () => {
  const { theme } = useTheme();
  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById("staticBackdrop");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) {
      offcanvasInstance.hide();
    }
  };
  return (
    <>
        <button className="btn_menu_movil" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" >
            <i className="fa-solid fa-bars-staggered"></i>
        </button>

        <div className="offcanvas offcanvas-start  w-100" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
          <div className="offcanvas-header" id={theme}>
              <Btn_logo/>
              <span>MENU</span>
              <button type="button" className='btn' data-bs-dismiss="offcanvas" aria-label="Close" id={theme}>
                <i className="fa-solid fa-x"></i>
              </button>
          </div>
          <div className="offcanvas-body" id={theme}>
              <div>
                <Menu_desck closeMenu={closeOffcanvas} />

              </div>
          </div>
          <div className="offcanvas-footer" id={theme}>
              <Social_media/>
          </div>
        </div>
    </>
  )
}

export default Btn_menu_movil
