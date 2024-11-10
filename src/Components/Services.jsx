import React from 'react';
import './Services.css';
import { FaLaptopCode, FaCode, FaServer, FaDatabase, FaCloud, FaMobileAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Services = () => {
  const services = [
    { id: 1, name: 'Full Stack Development', description: 'Development of robust and scalable web applications using Laravel for the backend and React.js for the frontend.', icon: <FaLaptopCode /> },
    { id: 2, name: 'Frontend Development', description: 'Creating responsive and interactive user interfaces with HTML, CSS, JavaScript, and React.js.', icon: <FaCode /> },
    { id: 3, name: 'Backend Development', description: 'Building and managing server-side logic and databases using Laravel and MySQL.', icon: <FaServer /> },
    { id: 4, name: 'Database Management', description: 'Designing, managing, and optimizing databases for performance and scalability with MySQL.', icon: <FaDatabase /> },
    { id: 6, name: 'API Development', description: 'Creating and integrating RESTful APIs using Laravel and MySQL for various applications.', icon: <FaCloud /> },
    { id: 7, name: 'Responsive Web Design', description: 'Ensuring websites are fully responsive and work seamlessly across all devices and screen sizes.', icon: <FaMobileAlt /> },
  ];

  return (
    <>
    <Sidebar />
    <section className='bg-customColor min-h-screen text-white px-4 sm:px-8 md:px-[8rem] lg:px-[13rem]'>
      <div className='py-[6rem] text-center'>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }}>
          <span className='text-yellowColor'>MY</span> SERVICES
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-0 lg:px-0 pb-20 md:pb-auto lg:pb-auto">
        {services.map((service) => (
          <div key={service.id} className="service-card rounded-lg  shadow-lg">
            <div className="service-icon text-4xl text-yellowColor">{service.icon}</div>
            <h2 className="service-title text-2xl font-semibold text-white mb-4">{service.name}</h2>
            <p className="service-description text-gray-100">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
  );
};

export default Services;
