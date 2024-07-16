import React from 'react';
import IMG1 from '../../assets/alc.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Project 01',
      img: IMG1,
      description:
        'This simple website was built to reach a bigger audience and ease the process of gathering donations for the students.',
      technologies: 'JavaScript | CSS',
      link: '',
      github: '',
    },
    {
      id: 2,
      title: 'project 02',
      img: IMG4,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'JavaScript | CSS',
      link: '',
      github: '',
    },
    {
      id: 3,
      title: 'Project 03',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | CSS',
      link: '',
      github: '',
    },
    {
      id: 4,
      title: 'Project 04',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: '',
      github: '',
    },
    {
      id: 5,
      title: 'Project 05',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: '',
      github: '',
    },
    {
      id: 6,
      title: 'Project 06',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | css | Python',
      link: '',
      github: '',
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;