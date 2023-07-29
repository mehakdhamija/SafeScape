import React, { useState } from 'react';
import data from '../mockAPI_responses/allCountryIssues.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

const AllProblems = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCityFilter = (event) => {
    setSelectedCity(event.target.value);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredData = data.filter((item) => {
    if (selectedCity === 'All') {
      return (
        item.complaint.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return (
        item.city === selectedCity &&
        (item.complaint.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.area.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  });

  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`px-3 py-1 ${
            i === currentPage ? 'bg-gray-500 text-white rounded-md' : ''
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </li>
      );
    }

    return pageNumbers;
  };

  return (
   <div className='bg-blue-300'>
      <div className='flex'>
        <div className='p-4 m-2 border border-black rounded-full cursor-pointer'><Link to='/'><FontAwesomeIcon icon={faArrowLeft} size="2x"/></Link>
        </div>
        <p className='text-bold text-4xl text-center p-5 ml-[35vw]'>All Issues</p>
      </div>
      <div className="container mx-auto mt-4 min-w-[90%] p-5 m-5 border border-black rounded-lg bg-gray-200">
      <div className="mb-4 flex justify-between">
        <div className="flex">
          <input
            type="text"
            placeholder="Search by complaint or area..."
            className="border border-gray-300 p-2 rounded-lg w-[30vw]"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select
            className="border border-gray-300 ml-2 p-2 rounded-lg"
            value={selectedCity}
            onChange={handleCityFilter}
          >
            <option value="All">All Cities</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div>
          <ul className="flex">
            {renderPageNumbers()}
          </ul>
        </div>
      </div>
      <table className="table-auto border-collapse border border-slate-500 bg-white m-2">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-slate-600">Name</th>
            <th className="px-4 py-2 border border-slate-600">City</th>
            <th className="px-4 py-2 border border-slate-600">Area</th>
            <th className="px-4 py-2 border border-slate-600">Complaint</th>
            <th className="px-4 py-2 border border-slate-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2 ">{item.name}</td>
              <td className="border px-4 py-2">{item.city}</td>
              <td className="border px-4 py-2">{item.area}</td>
              <td className="border px-4 py-2">{item.complaint}</td>
              <td className="border px-4 py-1">
                <div className={`${item.statusColor} p-2 rounded-md`}>
                  {item.status}
                </div>
              </td>
              {/* <td className={`border px-4 py-2 ${item.statusColor}`}>{item.status}</td> */}
        </tr>
      ))}
    </tbody>
  </table>
      </div>
   </div>
);
}


export default AllProblems

