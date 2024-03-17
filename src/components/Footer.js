
import React from 'react';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center mx-auto">
      <p className="my-5 text-gray-500">Made with ❤️ <br />by Aman Gupta</p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl justify-center">
        <a href="https://github.com/Aman99344" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaGithubSquare /></a>
        <a href="https://www.instagram.com/amangupta7782/" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/aman99344/" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaLinkedin /></a>
        <a href="https://www.facebook.com/Amangupta7782" target="_blank" rel="noopener noreferrer" className="text-gray-500"><FaFacebookSquare /></a>
      </div>
    </div>
  )
}

export default Footer;

