import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faTwitter , faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='w-screen border-t-2 border-dotted border-white h-full p-2 bg-blackPearl flex flex-col text-white'>
      <div className='w-full text-center p-2 text-3xl font-bold lg:pl-10'>Contact Me.</div>
      <div className='w-full flex flex-col items-center justify-center lg:flex-row justify-evenly items-center'>
      <div className='p-5 flex flex-col gap-y-4 text-lg justify-center items-center'>
        <div className='bg-gray-800 border-2 border-dotted p-2 rounded-lg'><a href="2022.vinit.solanki@ves.ac.in">2022.vinit.solanki@ves.ac.in</a></div>
      </div>
      <div className='p-5 text-xl text-center'>Last Updated: <b>29th Nov, 2024.</b></div>
      <div className='p-5 flex gap-x-4 text-center justify-center items-center'>
        <a href="https://www.instagram.com/notanerd_005/"><FontAwesomeIcon icon={faInstagram} className='text-2xl border-2 p-2 rounded-lg bg-white bg-opacity-10 hover:translate-y-[-4px] transition duration-200' /></a>
        <a href="https://x.com/VINITSOLAN82916"><FontAwesomeIcon icon={faTwitter} className='text-2xl border-2 p-2 rounded-lg bg-white bg-opacity-10  hover:translate-y-[-4px] transition duration-200'/></a>
        <a href="https://www.linkedin.com/in/vinit-solanki-ba091127b/"><FontAwesomeIcon icon={faLinkedinIn} className='text-2xl border-2 p-2 rounded-lg bg-white bg-opacity-10  hover:translate-y-[-4px] transition duration-200'/></a>
      </div>
      </div>
    </div>
  )
}

export default Contact