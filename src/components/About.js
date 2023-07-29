import React from 'react';
import collegeImage2 from '../assets/college2.jpg'
import collegeImage3 from '../assets/college3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      
      <div className="flex flex-col lg:flex-row bg-blue-300">
      {/* <div className="lg:w-1/2 h-screen bg-cover bg-center" style={{ backgroundImage: `url(../assets/college2.jpg)` }}></div> */}
      
      <div className='w-[40%] mt-4 ml-1'>
      <img className="rounded-xl filter grayscale mb-2 " src={collegeImage2} alt="college2" />
      <img className="rounded-xl filter grayscale w-[99%]" src={collegeImage3} alt="college3" />
      </div>
      
      <div className="lg:w-[60%] h-screen p-10 flex flex-col justify-center">
        
        <h1 className="text-6xl font-bold mb-4">About us</h1>
        <h1 className="text-4xl font-bold mb-4">SafeScape</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600 ">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Report Safety Concerns</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">Simply take a photo of the problem, add a description, and tag the location. Your submission will be sent to the appropriate authorities for review.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Geolocation Mapping</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">The app uses geolocation to provide a real-time feed of safety concerns in your local area. This feature helps you stay up-to-date with the issues in your community.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Easy Issue Tracking</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">Easily track the status of reported issues in your area. The app provides updates on the progress of the issue, and allows you to follow along as it is addressed. </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600 ">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Gamification Element</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">The Community Safety Watch App includes a gamification element to encourage users to report more safety concerns. By reporting issues, you can earn points and badges.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Partnership Opportunities</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">The app can partner with local governments or community organizations to address reported safety concerns. This partnership will provide local officials with access to the app to receive alerts about reported issues.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 border border-blue-600">
            <h2 className="text-lg font-semibold mb-2 bg-blue-300 p-1 text-center rounded-xl">Improve Community Safety</h2>
            <p className="text-gray-700 bg-gray-200 p-1 rounded-md">SafeScape is an innovative way to use technology to help communities address safety concerns and improve the quality of life for residents.</p>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
