import React, { useState } from 'react';
import './Portfolio.css';
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";
import starbucksClone from './images/starbucks-clone-img.jpg';
import website from './images/website-img.png';
import tmdb from './images/tmdb.jpg';
import spotifyClone from './images/spotifyClone.jpg';

const Portfolio = () => {
  // Initialize state as an array to track animated items
  const [animatedItems, setAnimatedItems] = useState([false, false]);

  const animateCard = (index) => {
    const newAnimatedItems = [...animatedItems];
    newAnimatedItems[index] = true;
    setAnimatedItems(newAnimatedItems);
  };

  const closeCard = (index, e) => {
    const newAnimatedItems = [...animatedItems];
    newAnimatedItems[index] = false;
    setAnimatedItems(newAnimatedItems);
    e.stopPropagation();
  };

  return (
    <section className="bg-customColor min-h-screen text-white">
      <div className="py-[6rem] text-center items-center">
        <h2 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '900' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="text-yellowColor">MY</span> PORTFOLIO
        </h2>
      </div>
      <section className="body">
        <main className="wrapper grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-0 md:gap-x-5 lg:gap-x-5">

          {/* Purely Pro Care Card */}
          <div className={`item ${animatedItems[0] ? 'animatedItems  lg:!w-[47%] md:!w-[80%] !w-[97%]' : ''}`} onClick={() => animateCard(0)}>
            <span className="close" onClick={(e) => closeCard(0, e)}></span>
            <div className="graphic">
              <img src={website} alt="Purely Pro Care" className='' />
              <span>Purely Pro Care</span>
            </div>
            <div className="brief">
              <div className="typo">
                <span>Purely Pro Care</span>
                <span>Full Stack Development</span>
              </div>
            </div>
            <div className="sub">
              <p className="header text-2xl md:text-3xl lg:text-5xl pb-4">Purely Pro Care</p>
              <p className="story">
                This project showcases a fully responsive home service booking platform,
                Purely Pro Care, developed using React, Laravel, and MySQL. It features
                a user-friendly layout with seamless navigation, service listings, and an
                interactive booking system. The design mimics professional service platforms,
                providing users with an intuitive experience for browsing and booking various home services.
              </p>
              <div className='text-black flex gap-3 py-2 text-xl'>
                <a href="https://github.com/sreeharshk92/Purely-Pro-Care-Frontend"><FaGithub /></a>
                <a href="https://astounding-youtiao-820a1a.netlify.app"><FaRegPlayCircle /></a>
              </div>
            </div>
          </div>

          {/* Starbucks Clone Card */}
          <div className={`item ${animatedItems[1] ? 'animatedItems  lg:!w-[50%] md:!w-[80%] !w-[97%]' : ''}`} onClick={() => animateCard(1)}>
            <span className="close" onClick={(e) => closeCard(1, e)}></span>
            <div className="graphic">
              <img src={starbucksClone} alt="Starbucks Clone" />
              <span>Starbucks Clone</span>
            </div>
            <div className="brief">
              <div className="typo">
                <span>Starbucks Clone</span>
                <span>Web Development</span>
              </div>
            </div>
            <div className="sub">
              <p className="header text-2xl md:text-3xl lg:text-4xl pb-4">Starbucks Clone</p>
              <p className="story">
                This project showcases a fully responsive clone of the Starbucks website,
                developed using HTML and CSS. It features a user-friendly layout with
                navigation, product displays, and an interactive design that mimics the
                original site's aesthetic, allowing users to experience a familiar
                browsing environment.              </p>
              <div className='text-black flex gap-3 py-2 text-xl'>
                <a href="https://github.com/sreeharshk92/Starbucks-clone"><FaGithub /></a>
                <a href="https://astounding-youtiao-820a1a.netlify.app"><FaRegPlayCircle /></a>
              </div>
            </div>
          </div>

          {/* TMDB */}
          <div className={`item ${animatedItems[2] ? 'animatedItems  lg:!w-[50%] md:!w-[80%] !w-[97%]' : ''}`} onClick={() => animateCard(2)}>
            <span className="close" onClick={(e) => closeCard(2, e)}></span>
            <div className="graphic">
              <img src={tmdb} alt="Purely Pro Care" />
              <span>TMDB Api</span>
            </div>
            <div className="brief">
              <div className="typo">
                <span>The Movie Database Api</span>
                <span>Web Api Integration</span>
              </div>
            </div>
            <div className="sub">
              <p className="header text-2xl md:text-3xl lg:text-4xl pb-4">The Movie Database Api</p>
              <p className="story">
                This project leverages the TMDB API to create an interactive movie exploration tool using HTML, CSS, and JavaScript. Users can browse a vast library of movies with a responsive design that adapts seamlessly to different screen sizes. The application features advanced filtering options, allowing users to sort movies by genre, release date, and rating, enhancing the overall user experience and making it easy to find the perfect film.              </p>
              <div className='text-black flex gap-3 py-2 text-xl'>
                <a href="https://github.com/sreeharshk92/The-movie-database-api"><FaGithub /></a>
                <a href="https://astounding-youtiao-820a1a.netlify.app"><FaRegPlayCircle /></a>
              </div>
            </div>
          </div>

          {/* Spotify clone */}
          <div className={`item ${animatedItems[3] ? 'animatedItems  lg:!w-[50%] md:!w-[80%] !w-[97%]' : ''}`} onClick={() => animateCard(3)}>
            <span className="close" onClick={(e) => closeCard(3, e)}></span>
            <div className="graphic">
              <img src={spotifyClone} alt="Purely Pro Care" />
              <span>Spotify Clone</span>
            </div>
            <div className="brief">
              <div className="typo">
                <span>Spotify Clone</span>
                <span>Web Development</span>
              </div>
            </div>
            <div className="sub">
              <p className="header text-2xl md:text-3xl lg:text-4xl pb-4">Spotify Clone</p>
              <p className="story">The project developed using React. It is a multiple webpage web application that mimics the core functionalities and design of the original Spotify interface. It features a dynamic homepage, a music library with playlists and albums, and user navigation across multiple pages such as artist profiles and song details. The clone leverages React's component-based architecture for fast rendering, enabling interactive elements like play buttons, search functionality, and audio controls.</p>
              <div className='text-black flex gap-3 py-2 text-xl'>
                <a href="https://github.com/sreeharshk92/Spotify-clone"><FaGithub /></a>
                <a href="https://astounding-youtiao-820a1a.netlify.app"><FaRegPlayCircle /></a>
              </div>
            </div>
          </div>



        </main>
      </section>
    </section>
  );
};

export default Portfolio;
