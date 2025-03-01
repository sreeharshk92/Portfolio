import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";
import starbucks from '../images/starbucks-site.png';
import website from '../images/website-img.png';
import tmdb from '../images/tmdb-site.png';
import spotify from '../images/spotify.png'
import pixelPositions from '../images/pixel-positions.png'
import formValidation from '../images/form-validation.png'
import wrc from '../images/wrc.png'
import Sidebar from '../SideBar/Sidebar';
import PageLoad from '../Loader/PageLoad';
import { headingVariant,letterVariant, cardVariant } from '../Animations/AnimationVarients';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 0,
    title: "Purely Pro Care",
    image: website,
    type: "Full Stack Website",
    techStack: "React | Laravel | MySQL | Tailwind",
    description: "This project showcases a fully responsive home service booking platform, Purely Pro Care, developed using React, Laravel, and MySQL. It features a user-friendly layout with seamless navigation, service listings, and an interactive booking system. The design mimics professional service platforms, providing users with an intuitive experience for browsing and booking various home services.",
    github: "https://github.com/sreeharshk92/Purely-Pro-Care-Frontend",
    live: "/workingonit"
  },
  {
    id: 1,
    title: "Starbucks Static Website",
    image: starbucks,
    type: "Static Website",
    techStack: "HTML | CSS",
    description: "This project showcases a fully responsive Starbucks website, developed using HTML and CSS. It features a user-friendly layout with navigation, product displays, and an interactive design that mimics the original site's aesthetic, allowing users to experience a familiar browsing environment.",
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
    title: "Spotify Web Application",
    image: spotify,
    type: "Dynamic Website",
    techStack: "React | Tailwind",
    description: "The project developed using React. It is a multiple webpage web application that mimics the core functionalities and design of the original Spotify interface. It features a dynamic homepage, a music library with playlists and albums, and user navigation across multiple pages such as artist profiles and song details.",
    github: "https://github.com/sreeharshk92/Spotify-clone",
    live: "https://spotifycloneorg.netlify.app"
  },
  {
    id: 4,
    title: "Pixel Positions",
    image: pixelPositions,
    type: "Full Stack Website",
    techStack: "Laravel | MySQL | Tailwind",
    description: "Pixel Positions is a dynamic job-seeking web application developed using Laravel, Tailwind CSS, and MySQL. The platform offers a seamless experience for users to explore job opportunities, manage postings, and apply for positions.",
    github: "https://github.com/sreeharshk92/pixel-positions",
    live: "/workingonit"
  },
  {
    id: 5,
    title: "Form Validator",
    image: formValidation,
    type: "Register Form",
    techStack: "HTML | CSS | JavaScript",
    description: "Form Validator is a lightweight and efficient web application built using HTML, CSS, and JavaScript. This project focuses on ensuring seamless and secure user registration through comprehensive form validation.",
    github: "https://github.com/sreeharshk92/form-validator",
    live: "https://sreeharshk92.github.io/form-validator/"
  },
  {
    id: 6,
    title: "World Rally Championship",
    image: wrc,
    type: "Static Website",
    techStack: "React | Tailwind",
    description: "World Rally Championship Website is a dynamic, immersive and fully responsive static web site built using React and Tailwindcss. This project showcases the adrenaline-fueled world of rally racing, featuring event schedules, champion profiles, and race highlights, delivering an engaging experience for motorsport enthusiasts.",
    github: "https://github.com/sreeharshk92/world-rally-championship",
    live: "https://wrc-opal.vercel.app/"
  },
];

const Portfolio = () => {

  const [loading, setLoading] = useState(true)

  const [expandedProject, setExpandedProject] = useState(null);

  const toggleCard = (index) => {
    setExpandedProject(index === expandedProject ? null : index);
  };

   useEffect(() => {
       const timer = setTimeout(() => {
         setLoading(false); // Stop loading after the animation completes
       }, 1800); // Match this duration to your PageLoad animation (e.g., 2 seconds)
   
       return () => clearTimeout(timer); // Cleanup timeout on component unmount
     }, []);

     const heading = "MY PORTFOLIO"
   

  return loading ? (<PageLoad />) :  (
    <>
    <Sidebar />
   
    <section className="bg-customColor min-h-screen text-white">
      <div className="text-center items-center">
      <motion.h2
      variants={headingVariant}
      initial="hidden"
      animate="visible"
      className="text-[2.8rem] pt-24  md:text-5xl lg:text-6xl text-center font-bold" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }}
    >
      {heading.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className={char === 'M' || char === 'Y' ? 'text-yellowColor' : ''}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
      </div>
      <section className="body">
        <motion.main
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-0 md:gap-x-5 lg:gap-x-5 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`item ${expandedProject === index ? 'animatedItems  lg:!w-[47%] md:!w-[80%] !w-[97%]' : ''}`}
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
        </motion.main>
      </section>
    </section>
    </>
  );
};

export default Portfolio;
