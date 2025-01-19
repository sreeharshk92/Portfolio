import React, { useState, useRef, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTelegram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { IoIosSend } from "react-icons/io";
import Sidebar from '../SideBar/Sidebar';
import PageLoad from '../Loader/PageLoad';
import { delay, motion } from 'framer-motion';
import {headingVariant, letterVariant, contactInfoVariant, formVariant} from '../Animations/AnimationVarients';


 const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)




  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, [])





  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c3ag9r8', 'template_gns33x9', form.current, { publicKey: 'BQYAMCezEk5BRPkEP' })
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setSuccess(false);
        setError(true);
        },
      );
  };



  const heading="CONTACT ME"


  return loading ? (<PageLoad />) : (
    <>
      <Sidebar />

      <section id="contact" className="lg:py-24 md:py-16 pt-14 pb-20 min-h-screen bg-customColor text-white text-center">
        <div className='items-center '>
          <motion.h2
          variants={headingVariant}
          initial="hidden"
          animate="visible"
          style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
           {heading.split('').map((char, index) => (
                   <motion.span
                     key={index}
                     variants={letterVariant}
                     className={char === 'M' || char === 'E' ? 'text-yellowColor' : ''}
                   >
                     {char}
                   </motion.span>
                 ))}
          </motion.h2>
          <div className="px-9 lg:px-0 md:px-0  lg:w-3/4 md:w-[36rem] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-24  text-left lg:mt-24">

            <motion.div 
            variants={contactInfoVariant}
            initial="hidden"
            animate="visible"
            className='font-semibold space-y-3 lg:w-2/3'>
              <h3 className="text-xl lg:text-2xl font-bold">GET IN TOUCH</h3>
              <p className="">Feel free to reach out via email or phone. I'm available for freelance projects and collaborations.</p>
              <p className=" flex items-center"><FaEnvelope className="mr-2" /> sreeharshk92@gmail.com</p>
              <p className=" flex items-center"><FaPhone className="mr-2" /> +91 7025984377</p>
              <div className="flex space-x-4 text-xl">
                <a href="https://www.facebook.com/sreeharsh.sreeharsh.923/"><FaFacebook className="hover:text-yellowColor transition duration-300" /></a>
                <a href="https://www.instagram.com/___sreeharsh___"><FaInstagram className="hover:text-yellowColor transition duration-300" /></a>
                <a href="https://wa.me/+917025984377" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:text-yellowColor transition duration-300" /></a>
                <a href="https://t.me/+917025984377"><FaTelegram className="hover:text-yellowColor transition duration-300" /></a>
                <a href="https://www.linkedin.com/in/sreeharsh-k-4b2782285/"><FaLinkedin className="hover:text-yellowColor transition duration-300" /></a>
                <a href="https://github.com/sreeharshk92"><FaGithub className="hover:text-yellowColor transition duration-300" /></a>
              </div>
            </motion.div>

            <motion.form 
            variants={formVariant}
            initial="hidden"
            animate="visible"
            onSubmit={sendEmail} ref={form} className="space-y-6 lg:mt-0 md:mt-5 mt-5">
              <div className='flex flex-col lg:flex-row gap-4'>
                <input type="text" name="user_name" className="smallInput" placeholder="YOUR NAME" required />
                <input type="email" name="user_email" className="smallInput" placeholder="YOUR EMAIL" required />
              </div>
              <div>
                <textarea name="message" className="largeInput" rows="8" placeholder="YOUR MESSAGE" required ></textarea>
                {success && ( <p className='text-yellow-300 font-bold'>Your message send successfully!</p>)}
              {error && <p className='text-red-500 font-bold'>Failed to send message</p>}
              </div>
              <button type='submit' className="text-sm font-bold flex items-center pl-8 border border-yellowColor rounded-3xl justify-between mt-8 mb-10 hover:bg-yellowColor hover:transition duration-500 ease-in-out">Send
                <IoIosSend className='ml-5 bg-yellowColor text-[2.4rem] rounded-full p-2' />
              </button>
            </motion.form>

          </div>
        </div>
      </section>
    </>

  )
}

export default Contact
