import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const checkPasswordStrength = (password) => {
    // check password strength and set passwordStrength state accordingly
  };

  const handleCountryChange = (val) => {
    setCountry(val);
  };

  const handleStateChange = (val) => {
    setState(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here

    // call POST API to save all details. 
    
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#c5e5ff] to-[#5da4fb]">
      
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign Up</h1>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />

            <h1>{name}</h1>

        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordStrength && (
            <p className="text-sm mt-2">
              Password Strength: <span className="text-green-600">{passwordStrength}</span>
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
            Country
          </label>
          <CountryDropdown
           
           value={country}
           onChange={handleCountryChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
         />
       </div>
       <div className="mb-6">
         <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
           State
         </label>
         <RegionDropdown
           country={country}
           value={state}
           onChange={handleStateChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           disableWhenEmpty={true}
         />
       </div>
       <div className="flex items-center justify-center">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit"
         >
           Sign Up
         </button>
       </div>
     </form>

   </div>
);
};

export default SignUp;   