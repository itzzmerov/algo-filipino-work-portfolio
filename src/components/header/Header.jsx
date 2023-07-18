import React from 'react'
import './header.css'
import CTA from './CTA'
import HERO from '../../assets/hero.png'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <div className='column left'>
          <h5 className='intro'>Hi! It's Me</h5>
          <h1 className='name'>John Rovie</h1>
          <h5 className='text-light'>and I'm a <span className='typewriter'>Web Developer</span></h5>
          <p>I spent my OJT/Internship at the Algo Filipino, under the Teravision PH. Here, I learned a lot of things that will surely helped me in the future. I learned how to use Git & GitHub for project management and how to use ReactJS in creating a web application. At the end of my internship, I created 3 major work tasks and 4 coding challenges that you can see at the "Projects" tab.</p>
          <CTA />
        </div>

        <div className='column right'>
          <img src={HERO} alt='Computer Programming'/>
        </div>
      </div>
    </header>
  )
}

export default Header