import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/rovicbalingbing' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/rovicbalingbing' target='_blank'><BsGithub/></a>
        <a href='https://facebook.com/rovicbalingbing20' target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials