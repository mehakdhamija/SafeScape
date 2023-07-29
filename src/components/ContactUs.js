import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API and save the data
    alert('Submitted');
    navigate('/');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
        <Navbar/>
        <div className="bg-blue-300 h-screen">
        <p className="text-bold text-3xl p-5 text-center ">Contact Us</p>
        <div className=" m-5 p-5 shadow-lg rounded-2xl bg-gray-100">
            
            
            
            <form className="mx-auto max-w-lg" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    </div>
                    <div>
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="email">
                    Email
                    </label>
                    <input
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="phone">
                    Phone Number
                    </label>
                    <input
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="city">
                    City of Residence
                    </label>
                    <input
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700" htmlFor="message">
                    Message
                    </label>
                    <textarea
                    className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={
                        handleInputChange}
                        />
                </div>
        
                <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
    </div>
);
}


export default ContactUs