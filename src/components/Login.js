import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here

    // call POST API to save all details. 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#c5e5ff] to-[#5da4fb]">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Login</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 h-[60vh] w-[31vw]">
        
        {/* Email */}
        <div className="mb-4 mt-20">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        
        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        
        
        {/* Submit button */}
       <div className="flex items-center justify-center mt-10">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit"
         >
           Login
         </button>
       </div>
     </form>

   </div>
);
};

export default Login;   