import React from 'react'

const Skill_logo = ({ name, icon }) => {
  return (
    <>
        <article className="skills_logo"  data-aos="flip-left"  data-aos-duration="5000" >
            <span>{name}</span>
            <img src={icon} alt={name} />
        </article>
    </>
  )
}

export default Skill_logo