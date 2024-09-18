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
  
<section id="contact" className="py-[6rem] min-h-screen bg-customColor text-white text-center">
  <div className='px-[20rem] items-center '>
    <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-6xl font-bold mb-[6.4rem]">
      CONTACT <span className='text-yellowColor'>ME</span>
    </h2>
    <div className="w-[48rem] mx-auto grid grid-cols-1 md:grid-cols-2 text-left">
      <div className='font-semibold   w-[22rem]'>
        <h3 className="text-2xl font-bold text-start mb-6">GET IN TOUCH</h3>
        <p className="mb-6 w-[20rem]">Feel free to reach out to me via email or phone. I'm available for freelance projects and collaborations.</p>
        <p className="mb-4 flex items-center"><FaEnvelope className="mr-2"/> sreeharshk92@gmail.com</p>
        <p className="mb-4 flex items-center"><FaPhone className="mr-2" /> +91 7025984377</p>
        <div className="flex space-x-4 mt-6 text-2xl">
          <a href=""><FaFacebook className="hover:text-yellowColor transition duration-300" /></a>
          <a href=""><FaInstagram className="hover:text-yellowColor transition duration-300" /></a>
          <a href="https://wa.me/917025984377" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-yellowColor transition duration-300" /></a>
          <a href=""><FaTelegram className="hover:text-yellowColor transition duration-300" /></a>
          <a href="https://www.linkedin.com/in/sreeharsh-k-4b2782285/"><FaLinkedin className="hover:text-yellowColor transition duration-300" /></a>
          <a href="https://github.com/sreeharshk92"><FaGithub className="hover:text-yellowColor transition duration-300" /></a>
        </div>
      </div>
      
        <form onSubmit={sendEmail} ref={form} className="space-y-6 w-[35rem] items-left  text-sm">
          <div className='flex gap-2'>
            <input type="text" name="user_name" className="w-full px-6 py-3 border-inputColor rounded-[3rem] focus:outline-none focus:border-yellowColor bg-inputColor placeholder-inputTextColor" placeholder="YOUR NAME" />
            <input type="email" name="user_email" className="w-full px-6 py-3 border-inputColor rounded-[3rem] focus:outline-none focus:border-yellowColor bg-inputColor placeholder-inputTextColor" placeholder="YOUR EMAIL" />
            </div>
          <div>
            <textarea name="message" className="w-full px-10 py-3 border-inputColor rounded-[3rem] focus:outline-none focus:border-yellowColor bg-inputColor placeholder-inputTextColor" rows="10" placeholder="YOUR MESSAGE"></textarea>
            { sendMessage && <p className='text-yellow-300 ml-6 font-thin'>{sendMessage}</p>}
          </div>
          <button value="Send" type='submit' style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '500' }} className='flex items-center justify-center border border-yellowColor rounded-3xl py-3 w-[13rem] mt-4 mb-[3.9rem] hover:bg-yellowColor hover:transition duration-500 ease-linear'>SEND</button>
        </form>

    </div>
  </div>
</section>

  )
}

export default Contact
