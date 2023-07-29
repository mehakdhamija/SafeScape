import { useState } from "react";

function ComplaintForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    complaint: "",
    area: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send API call with formData
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="px-4 bg-blue-300  rounded-2xl p-3 m-3 w-screen">
      <h1 className="text-3xl font-bold mb-10 mx-[30%]">Register your Complaint here</h1>
      <form onSubmit={handleSubmit} className="max-w-[40%] ml-[30%]">
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
          <label className="block mb-2 font-bold text-gray-700" htmlFor="complaint">
            Enter your complaint
          </label>
          <textarea
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            id="complaint"
            name="complaint"
            rows="4"
            value={formData.complaint}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700" htmlFor="area">
            Enter the specific area where you have faced this issue
          </label>
          <input
            className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleInputChange}
          />
        </div>
    
        <div className="flex justify-start">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    );
  }
  
  export default ComplaintForm;
    
