import React, { useState, useRef  } from 'react'
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTelegram,FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [sendMessage,setSendMessage] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c3ag9r8', 'template_gns33x9', form.current, {
        publicKey: 'BQYAMCezEk5BRPkEP',
      })
      .then(
      () => {
          setSendMessage('Message send successfully')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
  
<section id="contact" className="lg:py-24 md:py-16 py-14 min-h-screen bg-customColor text-white text-center">
      <div className='px-4 md:px-16 items-center'>
        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          CONTACT <span className='text-yellowColor'>ME</span>
        </h2>
        <div className="w-full lg:w-3/4  mx-auto grid grid-cols-1 lg:grid-cols-2  text-left lg:mt-24">
          <div className='font-semibold lg:w-2/3'>
            <h3 className="text-xl lg:text-2xl font-bold mb-6">GET IN TOUCH</h3>
            <p className="mb-6">Feel free to reach out via email or phone. I'm available for freelance projects and collaborations.</p>
            <p className="mb-4 flex items-center"><FaEnvelope className="mr-2" /> sreeharshk92@gmail.com</p>
            <p className="mb-4 flex items-center"><FaPhone className="mr-2" /> +91 7025984377</p>
            <div className="flex space-x-4 mt-6 text-xl">
              <a href="https://www.facebook.com/sreeharsh.sreeharsh.923/"><FaFacebook className="hover:text-yellowColor transition duration-300" /></a>
              <a href="https://www.instagram.com/___sreeharsh___"><FaInstagram className="hover:text-yellowColor transition duration-300" /></a>
              <a href="https://wa.me/+917025984377" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="hover:text-yellowColor transition duration-300" /></a>
              <a href="https://t.me/+917025984377"><FaTelegram className="hover:text-yellowColor transition duration-300" /></a>
              <a href="https://www.linkedin.com/in/sreeharsh-k-4b2782285/"><FaLinkedin className="hover:text-yellowColor transition duration-300" /></a>
              <a href="https://github.com/sreeharshk92"><FaGithub className="hover:text-yellowColor transition duration-300" /></a>
            </div>
          </div>

          <form onSubmit={sendEmail} ref={form} className="space-y-6 lg:mt-0 md:mt-5 mt-5">
            <div className='flex flex-col lg:flex-row gap-4'>
              <input type="text" name="user_name" className="w-full px-6 py-3 border-inputColor rounded-full focus:outline-none focus:border-yellowColor bg-inputColor placeholder-inputTextColor" placeholder="YOUR NAME" />
              <input type="email" name="user_email" className="w-full px-6 py-3 border-inputColor rounded-full focus:outline-none focus:border-yellowColor bg-inputColor placeholder-inputTextColor" placeholder="YOUR EMAIL" />
            </div>
            <div>
              <textarea name="message" className="w-full px-6 py-3  rounded-3xl focus:outline-none focus:outline-yellowColor bg-inputColor placeholder-inputTextColor" rows="8" placeholder="YOUR MESSAGE"></textarea>
              {sendMessage && <p className='text-yellow-300 font-thin'>{sendMessage}</p>}
            </div>
            <button type='submit' className='border border-yellowColor rounded-3xl py-3 px-14 mt-4 hover:bg-yellowColor hover:transition duration-500 ease-linear'>
              SEND
            </button>
          </form>

        </div>
      </div>
    </section>

  )
}

export default Contact
