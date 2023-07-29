import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-1/3 px-4">
          <h2 className="text-2xl font-bold mb-4">SafeScape</h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut massa nec leo sodales eleifend.</p>
          <div className="flex">
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h3 className="text-xl font-bold mb-4">Options</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="#">Login</a></li>
            <li className="mb-2"><a href="#">Sign Up</a></li>
            <li className="mb-2"><a href="#">About Us</a></li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3 px-4">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-4">123 Main Street<br />New York, NY 10001</p>
          <p className="mb-4">Phone: (123) 456-7890<br />Email: info@safescape.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2023 SafeScape. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
