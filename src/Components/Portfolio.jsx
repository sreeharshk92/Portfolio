import React, { useState, useEffect } from 'react';
import "swiper"
import Swiper from 'swiper';
import './Portfolio.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import starBucksCloneImg from './images/starbucks-clone-img.jpg'
import tmdbApiImg from './images/tmdb-api-img.jpg'
import websiteImg from './images/website-img.png'
import spotifyCloneImg from './images/spotify-clone-img.png'

const Portfolio = () => {

  useEffect(() => {
    new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className='bg-customColor min-h-screen text-white '>
      <div className='py-[6rem] text-center items-center'>
        <h2
          style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          <span className='text-yellowColor'>MY</span> PORTFOLIO
        </h2>
      </div>
      <section className="mx-auto lg:py-5 md:py-5 px-10 md:px-[10rem]">


      
      <div className="blog-slider">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">
              READ MORE
            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/jason-leung-798979-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">
              READ MORE
            </a>
          </div>
        </div>

        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759871/alessandro-capuzzi-799180-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="blog-slider__button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
              
          
      
      </section>
    </section>
  );
};

export default Portfolio;




    /*
<section className="border border-md rounded-lg p-10 md:w-[15rem] lg:w-[15rem]   w-[17rem] ">
                <img className="w-full object-cover rounded-t-md hover:transition duration-700 ease-in-out hover:scale-110" src={starBucksCloneImg} alt="Portfolio item"/>
                <h3 className="text-lg sm:text-xl text-center py-4 font-semibold">Starbucks Clone</h3>
                <div className='flex flex-col gap-3 justify-between mt-4  '>
                  <a href="https://github.com/sreeharshk92/Starbucks-Clone.git" className='w-full md:w-auto border rounded-md flex gap-2  items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear' >
                    <FaGithub  />GitHub
                  </a>
                  <a href="https://astounding-youtiao-820a1a.netlify.app/"
                    className='w-full md:w-auto border rounded-md flex gap-2 items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'
                  >
                    <FaExternalLinkAlt />DEMO
                  </a>
                </div>
              </section>


              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[15rem]  w-[17rem] ">
                <img className="w-full object-cover rounded-t-md hover:transition duration-700 ease-in-out hover:scale-110" src={tmdbApiImg} alt="Portfolio item"/>
                <h3 className="text-lg sm:text-xl text-center py-4 font-semibold">TMDB API</h3>
                <div className='flex flex-col gap-3 justify-between mt-4  '>
                  <a href="https://github.com/sreeharshk92/Starbucks-Clone.git" className='w-full md:w-auto border rounded-md flex gap-2  items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear' >
                    <FaGithub  />GitHub
                  </a>
                  <a href="https://astounding-youtiao-820a1a.netlify.app/"
                    className='w-full md:w-auto border rounded-md flex gap-2 items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'
                  >
                    <FaExternalLinkAlt />DEMO
                  </a>
                </div>
              </section>
              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[15rem] w-[17rem] ">
                <img className="w-full object-cover rounded-t-md hover:transition duration-700 ease-in-out hover:scale-110" src={spotifyCloneImg} alt="Portfolio item"/>
                <h3 className="text-lg sm:text-xl text-center py-4 font-semibold">Spotify Clone</h3>
                <div className='flex flex-col gap-3 justify-between mt-4  '>
                  <a href="https://github.com/sreeharshk92/Spotify-clone.git" className='w-full md:w-auto border rounded-md flex gap-2  items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear' >
                    <FaGithub  />GitHub
                  </a>
                  <a href="https://astounding-youtiao-820a1a.netlify.app/"
                    className='w-full md:w-auto border rounded-md flex gap-2 items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'
                  >
                    <FaExternalLinkAlt />DEMO
                  </a>
                </div>
              </section>

              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[15rem] w-[17rem] ">
                <img className="w-full object-cover rounded-t-md hover:transition duration-700 ease-in-out hover:scale-110" src={websiteImg} alt="Portfolio item"/>
                <h3 className="text-lg sm:text-xl text-center py-4 font-semibold">Full Stack Website</h3>
                <div className='flex flex-col gap-3 justify-between mt-4  '>
                  <a href="https://github.com/sreeharshk92/Purely-Pro-Care-Frontend.git" className='w-full md:w-auto border rounded-md flex gap-2  items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear' >
                    <FaGithub  />GitHub
                  </a>
                  <a href="https://astounding-youtiao-820a1a.netlify.app/"
                    className='w-full md:w-auto border rounded-md flex gap-2 items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'
                  >
                    <FaExternalLinkAlt />DEMO
                  </a>
                </div>
              </section>

    */