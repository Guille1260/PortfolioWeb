import React from 'react'

const Washer = ({id}) => {
  return (
    <>
      <div class="hero_union" id={id} data-aos="fade-right" data-aos-duration="2000" > 
          <div class="hero_square">
              <span></span>
              <span></span>
              <span></span>
              <span></span> 
          </div> 
          <div class="hero_dot"></div> 
      </div>
    </>
  )
}

export default Washer
