import React from 'react'
import Number from './Number'
import Hero from './Hero'
import Washer from './Washer'
import Binari from './Binari'
import logo from '../../../public/assets/images/logo_dark.png'
const Main_decoration = () => {
  
  return (
    <>
        <div class="hero_decorators" >
          <Binari/>
           <Washer/>
           {/* <Hero/>  */}
           <div className="hero_photo_ctn " data-aos="fade-down" data-aos-duation="2000">
            <div className="hero_photo">
              <div>
                <img
                  src={logo}
                  alt=""
                />
              </div>
            </div>
          </div>
          <Number/>
        </div>
    </>
  )
}

export default Main_decoration
