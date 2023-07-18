import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_owzhslb', 'template_6qiaptk', form.current, 'esPwZu_HZ7oHI3Axk')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4 className='contact__title'>Email</h4>
            <h5 className='contact__email'>balingbing.johnrovie20@gmail.com</h5>
            <a href='mailto:balingbing.johnrovie20@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <div className='social__icons'>
            <a href='https://www.facebook.com/RovicBalingbing20' target='_blank'><BsFacebook className='social__icon'/></a>
            <a href='https://www.linkedin.com/in/rovicbalingbing/' target='_blank'><BsLinkedin className='social__icon'/></a>
            <a href='https://github.com/rovicbalingbing' target='_blank'><BsGithub className='social__icon'/></a>
          </div>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4 className='contact__title'>Messenger</h4>
            <h5 className='contact__email'>@RovicBalingbing20</h5>
            <a href='https://m.me/RovicBalingbing20' target='_blank'>Send a Message</a>
          </article>
          
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact