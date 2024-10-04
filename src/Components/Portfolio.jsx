import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import starBucksCloneImg from './images/starbucks-clone-img.jpg'
import tmdbApiImg from './images/tmdb-api-img.jpg'
import websiteImg from './images/website-img.png'
import spotifyCloneImg from './images/spotify-clone-img.png'

const Portfolio = () => {
  // const works = [
  //   { id: 1, name: 'CLONE', imgname: 'cloneimg.png' },
  //   { id: 2, name: 'API', imgname: 'cloneimg.png' },
  //   { id: 3, name: 'FIGMA', imgname: 'cloneimg.png' },
  //   { id: 4, name: 'REACT', imgname: 'cloneimg.png' },
  //   { id: 5, name: 'SPOTIFY CLONE', imgname: 'cloneimg.png' },
  //   { id: 6, name: 'CLONE', imgname: 'cloneimg.png' }
  // ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-24 md:gap-y-9 lg:gap-x-10  lg:gap-y-10 place-items-center">


              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[20rem] w-[17rem] ">
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


              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[20rem] w-[17rem] ">
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
              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[20rem] w-[17rem] ">
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

              <section className="border border-md rounded-lg p-6 md:w-[15rem] lg:w-[20rem] w-[17rem] ">
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
          
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
