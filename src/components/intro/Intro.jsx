import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <a href="#experience">
              <h5>Experience</h5></a>
              <small>01 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <a href='#portfolio'>
              <h5>Projects</h5></a>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>An enthusiastic student with a passion for technology. I enjoy learning and am always eager to expand my knowledge and skills. </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro