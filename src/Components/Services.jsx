import React from 'react';
import { FaLaptopCode, FaCode, FaServer, FaDatabase, FaCloud, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    { id: 1, name: 'Full-Stack Web Development', description: 'Development of robust and scalable web applications using Laravel for the backend and React.js for the frontend.', icon: <FaLaptopCode /> },
    { id: 2, name: 'Frontend Development', description: 'Creating responsive and interactive user interfaces with HTML, CSS, JavaScript, and React.js.', icon: <FaCode /> },
    { id: 3, name: 'Backend Development', description: 'Building and managing server-side logic and databases using Laravel and MySQL.', icon: <FaServer /> },
    { id: 4, name: 'Database Management', description: 'Designing, managing, and optimizing databases for performance and scalability with MySQL.', icon: <FaDatabase /> },
    { id: 6, name: 'API Development', description: 'Creating and integrating RESTful APIs using Laravel and MySQL for various applications.', icon: <FaCloud /> },
    { id: 7, name: 'Responsive Web Design', description: 'Ensuring websites are fully responsive and work seamlessly across all devices and screen sizes.', icon: <FaMobileAlt /> },
  ];

  return (
    <section className='bg-customColor min-h-screen text-white px-[13rem]'>
      <div className='py-[6rem] text-center'>
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-6xl font-bold">
          <span className='text-yellowColor'>MY</span> SERVICES
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {services.map(service => (
          <div key={service.id} className="flex flex-col border items-center border-md rounded-lg p-6 text-center" style={{ boxShadow: '0 0 .5rem yellowColor', outline: '2px solid yellowColor' }}>
            <div className="text-5xl text-center text-yellowColor mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
