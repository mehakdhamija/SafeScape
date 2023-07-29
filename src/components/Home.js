import React from 'react'
import Navbar from './Navbar'
import collegeImage from '../assets/college.png'
import hand from '../assets/hand.png'
import ProfileInfo from './ProfileComponents/ProfileInfo'
import AllIssues from './ProfileComponents/AllIssues'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate('/registerComplaint');
  };

  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center bg-blue-300">
      <div className="h-[90%] w-[92%] border-gray-100 flex justify-center items-center bg-white rounded-3xl">
        <div className="h-[97%] w-[97%] bg-gray-200 rounded-2xl">
          
          <Navbar/>
          
          <div className='flex'>

            {/* left column */}
            <div className='w-[40%]'>
                <h1 className='text-7xl pl-10 pb-2 pt-10 font-extrabold text-gray-600'>SafeScape</h1>
                <p className='pl-10 pt-2 text-lg'>
                    We are a platform where you can report the issues in your locality and 
                </p>
                <ProfileInfo/>
            </div>
            <div>
              <button 
                onClick={handleClick} 
                className='bg-blue-400 hover:bg-sky-700 p-2 rounded-lg mt-[33vh] ml-12 border border-blue-950'
              ><Link to='/registerComplaint'>Add your complaint</Link>
              </button>
            </div>
            {/* college photo */}
            <div className='ml-2'>
                <img className="rounded-xl filter grayscale translate-x-32" src={collegeImage} alt="college" />
            </div>
            {/* hand */}
            <div>
                <img className="transform scale-150 translate-x-8 translate-y-4" src={hand} alt="college" />
            </div>
          </div>

          <div>
            <AllIssues/>
          </div>
         
        
        </div>
      </div>
      
    </div>

    <Footer/>
    </>
    

  )

}

export default Home
