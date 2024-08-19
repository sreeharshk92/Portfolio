import React from 'react';
import { FaDownload } from 'react-icons/fa'
const About = () => {
  
  const skills = [
    { name: 'HTML', percentage: 90 , level: 'w-[5rem]' },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 80 },
    { name: 'MySQL', percentage: 70 },
    { name: 'PHP', percentage: 85 },
    { name: 'Laravel', percentage: 80 },
  ];

  return (
    <section id="about"  className="py-[6rem] bg-customColor  text-white text-center">
      <div className='px-[23rem] items-center'>

      
      <h2 style={{ fontFamily:'Montserrat,sans-serif' , fontWeight:'900'}}  className="text-6xl font-bold mb-[6.4rem]">ABOUT <span className='text-yellowColor'>ME</span></h2>
      <h3 className="text-2xl font-bold text-start mb-6">PERSONEL INFOS</h3>
      <div  className="w-[55rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[16rem] text-left">
        <div className='font-semibold'>
          <p className="mb-4"><span className=" text-slate-400">Full Name : </span>Sreeharsh</p>
          <p className="mb-4"><span className=" text-slate-400">Last Name : </span> K</p>
          <p className="mb-4"><span className=" text-slate-400">Age : </span>21</p>
          <p className="mb-4"><span className=" text-slate-400">Nationality : </span>India</p>
          <p className="mb-4"><span className=" text-slate-400">Languages : </span>English | Malayalam</p>
        </div>
        <div className='font-semibold'> 
          <p className="mb-4"><span className=" text-slate-400">State : </span>Kerala</p>
          <p className="mb-4"><span className=" text-slate-400">Phone : </span>+ 91 7025984377</p>
          <p className="mb-4"><span className=" text-slate-400">Email : </span>sreeharshk92@gmail.com</p>
          <p className="mb-4"><span className=" text-slate-400">Freelance : </span>Available</p>
          <p className="mb-4"><span className=" text-slate-400">LinkedIn : </span>LinkedIn.com/in/sreeharshk</p>
                  
        </div>
       
      </div>
      <button style={{ fontFamily:'Montserrat,sans-serif' , fontWeight:'500'}} 
      className='flex items-center justify-center border border-yellowColor rounded-3xl py-3 w-[13rem] mt-8 mb-[3.9rem] hover:bg-yellowColor hover:transition duration-500 ease-linear'>
       DOWNLOAD CV <FaDownload className='ml-5'/></button>
      </div>
      

      <hr className="mx-[31.5rem] border-slate-700 mb-14" />
      <h3 style={{ fontFamily:'Montserrat,sans-serif' , fontWeight:'700'}} className="text-3xl font-bold mb-16">MY SKILLS</h3>
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 s">

        {
          skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center ">
              <div className="mb-4">
                <div style={{ width:'10rem'}} className="bg-yellowColor rounded-full border border-gray-800">
                  {skill.percentage}%
                </div>
              </div>
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default About;
