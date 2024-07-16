import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/ravindu-aluvihare-637858196/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/ravindu-aluvihare" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/ravindu__ar?igsh=c3RqbmV2MHdyOWYw" target="_blank" rel="noreferrer" ><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials