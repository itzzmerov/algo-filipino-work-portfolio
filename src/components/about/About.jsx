import React from 'react'
import './about.css'
import ME from '../../assets/about-me.png'
import CTA from '../header/CTA'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='about__container'>
        <div className='about__left'>
          <div className='about__image'> 
            <img src={ME} alt='About Image'/>
          </div>
        </div>

        <div className='about__right'>
          <h5 className='about__intro'>Hi! It's Me John Rovie</h5>
          <h5 className='about__intro1'>and I'm a <span className='typewriter'>Web Developer</span></h5>
          <p>In my 4th year at college, I focused on mobile and web development since our CAPSTONE project was to create a web-based and mobile application for a real-time public emergency reporting and monitoring system. Here, I started to become fond of full-stack web development. I also learned about Java and Kotlin for Android Studio.</p>
          <p>After our CAPSTONE project, I started to find a company for an internship and this is where I got accepted as an intern at Algo Filipino. I became a part of their Web Team and started taking on challenges and tasks. I learned a lot of things here, including the importance of project management. I also tried different frameworks for web development such as Bootstrap and ReactJS.</p>
          <CTA />
        </div>
      </div>
    </section>
  )
}

export default about