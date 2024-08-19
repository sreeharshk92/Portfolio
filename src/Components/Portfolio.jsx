import React from 'react';
// import cloneimg from './cloneimg.png'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const works = [
    { id: 1, name: 'CLONE', imgname: 'cloneimg.png' },
    { id: 2, name: 'API', imgname: 'cloneimg.png' },
    { id: 3, name: 'FIGMA', imgname: 'cloneimg.png' },
    { id: 4, name: 'REACT', imgname: 'cloneimg.png' },
    { id: 5, name: 'CLONE', imgname: 'cloneimg.png' },
    { id: 6, name: 'CLONE', imgname: 'cloneimg.png' }
  ]
  return (
    <section className='bg-customColor min-h-screen text-white px-[13rem]'>
      <div className='py-[6rem] text-center items-center '>
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-6xl font-bold">
          <span className='text-yellowColor'>MY</span> PORTFOLIO
        </h2>
      </div>
      <section class="mx-auto py-12 px-[6rem]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            works.map((item) =>
              <div key={item.id} class="border border-md rounded-lg p-6">
                <img class="w-full object-cover rounded-t-md hover:transition duration-700 ease-in-out hover:scale-110" src={`/${item.imgname}`} alt="image" />
                <h3 class="text-xl text-center py-4 font-semibold">{item.name}</h3>
                <div className='flex justify-between'>
                  <a href='' className='border rounded-md flex items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'><FaGithub className='mr-2'/>GitHub</a>
                  <a hre='' className='border rounded-md flex items-center justify-center border-yellowColor px-4 py-2 hover:bg-yellowColor hover:transition duration-500 ease-linear'><FaExternalLinkAlt className='mr-2' />DEMO</a>
                </div>


              </div>
            )
          }
        </div>
      </section>
    </section>
  );
};

export default Portfolio;
