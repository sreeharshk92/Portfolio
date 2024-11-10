import React, { useState } from 'react';
import './Portfolio.css';
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";
import starbucksClone from './images/starbucks-clone-img.jpg';
import website from './images/website-img.png';
import tmdb from './images/tmdb.jpg';
import spotifyClone from './images/spotifyClone.jpg';
import Sidebar from './Sidebar';

const projects = [
  {
    id: 0,
    title: "Purely Pro Care",
    image: website,
    type: "Full Stack Website",
    techStack: "React | Laravel | MySQL",
    description: "This project showcases a fully responsive home service booking platform, Purely Pro Care, developed using React, Laravel, and MySQL. It features a user-friendly layout with seamless navigation, service listings, and an interactive booking system. The design mimics professional service platforms, providing users with an intuitive experience for browsing and booking various home services.",
    github: "https://github.com/sreeharshk92/Purely-Pro-Care-Frontend",
    live: "/workingonit"
  },
  {
    id: 1,
    title: "Starbucks Clone",
    image: starbucksClone,
    type: "Static Website",
    techStack: "HTML | CSS",
    description: "This project showcases a fully responsive clone of the Starbucks website, developed using HTML and CSS. It features a user-friendly layout with navigation, product displays, and an interactive design that mimics the original site's aesthetic, allowing users to experience a familiar browsing environment.",
    github: "https://github.com/sreeharshk92/Starbucks-clone",
    live: "https://astounding-youtiao-820a1a.netlify.app"
  },
  {
    id: 2,
    title: "The Movie Database Api",
    image: tmdb,
    type: "Web API",
    techStack: "HTML | CSS | JavaScript",
    description: "This project leverages the TMDB API to create an interactive movie exploration tool using HTML, CSS, and JavaScript. Users can browse a vast library of movies with a responsive design that adapts seamlessly to different screen sizes. The application features advanced filtering options, allowing users to sort movies by genre, release date, and rating.",
    github: "https://github.com/sreeharshk92/The-movie-database-api",
    live: "https://searchformovies-api.netlify.app"
  },
  {
    id: 3,
    title: "Spotify Clone",
    image: spotifyClone,
    type: "Dynamic Website",
    techStack: "React",
    description: "The project developed using React. It is a multiple webpage web application that mimics the core functionalities and design of the original Spotify interface. It features a dynamic homepage, a music library with playlists and albums, and user navigation across multiple pages such as artist profiles and song details.",
    github: "https://github.com/sreeharshk92/Spotify-clone",
    live: "https://spotifycloneorg.netlify.app"
  }
];

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleCard = (index) => {
    setExpandedProject(index === expandedProject ? null : index);
  };

  return (
    <>
    <Sidebar />
   
    <section className="bg-customColor min-h-screen text-white">
      <div className="py-[6rem] text-center items-center">
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '900' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-yellowColor">MY</span> PORTFOLIO
        </h2>
      </div>
      <section className="body">
        <main className="wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-0 md:gap-x-5 lg:gap-x-5">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`item ${expandedProject === index ? 'animatedItems lg:!w-[47%] md:!w-[80%] !w-[97%]' : ''}`}
              onClick={() => toggleCard(index)}
            >
              <span className="close" onClick={(e) => { e.stopPropagation(); toggleCard(null); }}></span>
              <div className="graphic">
                <img src={project.image} alt={project.title} />
                <span>{project.title}</span>
              </div>
              <div className="brief">
                <div className="typo">
                  <span>{project.type}</span>
                  <span>{project.techStack}</span>
                </div>
              </div>
              {expandedProject === index && (
                <div className="sub">
                  <p className="header text-2xl md:text-3xl lg:text-4xl pb-4">{project.title}</p>
                  <p className="story">{project.description}</p>
                  <div className="text-black flex gap-3 py-2 text-xl">
                    <a href={project.github}><FaGithub /></a>
                    <a href={project.live}><FaRegPlayCircle /></a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      </section>
    </section>
    </>
  );
};

export default Portfolio;
