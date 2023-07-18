import React from 'react'
import './projects.css'
import KapeWebsite from '../../assets/coffee-shop-website.PNG'
import Resume from '../../assets/responsive-resume.PNG'
import WeatherApp from '../../assets/weather-app.PNG'
import OnlineExam from '../../assets/online-exam-system.PNG'
import ToDoApp from '../../assets/todo-list-app.PNG'
import CalculatorApp from '../../assets/php-calculator-app.PNG'
import MusicPlayer from '../../assets/music-player-app.PNG'
import Appointment from '../../assets/appointment-booking-app.PNG'
import VotingSystem from '../../assets/online-voting-system.PNG'

const Projects = () => {
  return (
    <section id="projects">
      <h5>What I Did</h5>
      <h2>Projects</h2>
      <div className='projects__container'>
        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={KapeWebsite} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Coffee Shop Website</h2>
            <p>A coffee shop website created using HTML, CSS, JS, PHP & MySQL</p>
            <a href='https://kapetanncoffeeshop.infinityfreeapp.com/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/KapetannCoffeeShop' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={Resume} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Resume/CV Responsive</h2>
            <p>A Responsive CV/Resume using HTML and CSS only.</p>
            <a href='https://algo-filipino.github.io/ResponsiveResumeJohnRovie/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/ResponsiveResumeJohnRovie' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={WeatherApp} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Weather App</h2>
            <p>A Simple Weather App using HTML, CSS, JS, & JSON. OpenWeather API was also used for this app.</p>
            <a href='https://algo-filipino.github.io/rovic-weather-app/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-weather-app' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={OnlineExam} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Online Exam</h2>
            <p>This is an Online Examination System. This was created using HTML, CSS, JS, PHP, & MySQL.</p>
            <a href='https://evalutest.000webhostapp.com/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/online-examination-system' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={ToDoApp} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>To-Do App (ReactJS)</h2>
            <p>This is a simple To-Do List Application that was developed using ReactJS.</p>
            <a href='https://rovzzz-todo-list.netlify.app/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-todo-list' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={CalculatorApp} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>PHP Calculator App</h2>
            <p>Simple Responsive Calculator App using HTML, CSS, & PHP only.</p>
            <a href='https://php-calculator-app.000webhostapp.com/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-php-calculator' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={MusicPlayer} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Music Player App</h2>
            <p>This is a simple and responsive music player using HTML, CSS, & JavaScript.</p>
            <a href='https://algo-filipino.github.io/rovic-music-player/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-music-player' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={Appointment} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Appointment Booking App</h2>
            <p>This is a simple appointment booking app using Angular JS</p>
            <a href='https://algo-filipino.github.io/rovic-appointment-booking/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-appointment-booking.git' target='_blank'>View Source</a>
          </div>
        </div>

        <div className='projects__card'>
          <div className='projects__imgBox'>
            <img src={VotingSystem} alt=''/>
          </div>
          <div className='projects__content'>
            <h2>Online Voting System</h2>
            <p>This is an Online Voting System using PHP CRUD & MySQL.</p>
            <a href='https://algofilipinovoting.000webhostapp.com/' className='live__btn' target='_blank'>Live Demo</a>
            <a href='https://github.com/Algo-Filipino/rovic-evoting-system.git' target='_blank'>View Source</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects