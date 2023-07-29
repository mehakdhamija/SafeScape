import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../assets/Scrollbar.css"

import data from "../../mockAPI_responses/allIssues.json";

  
const AllIssues = () => {


  // const [data, setData] = useState([]); // state to hold the API data

  // useEffect(() => {
  //   // fetch the API data using Axios
  //   axios
  //     .get("https://api.example.com/data")
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.log(error));
  // }, []);


  return (
    <div className='bg-gradient-to-r from-[#c5e5ff] to-[#5da4fb] h-[100%] m-8 rounded-lg p-2  drop-shadow-2xl'>
      <div>
        <p className='text-2xl text-center p-1 font-bold'>Your registered Complaints</p>
      </div>

      <div className="h-40 overflow-scroll scrollbar-w-2">
        {data.map((item) => (
          <div className="flex justify-between">
            <div key={item.id} className="w-[80%] p-3 mb-3 mr-4 bg-gray-100 rounded-lg">
              <h1 className="text-xl font-medium">{item.message}</h1>
            </div>

            <div className={`${item.color} p-3 mb-3 rounded-md w-[10%]`}>
              <h1 className='text-lg text-bold text-center'>{item.status}</h1>
            </div>

          </div>
        ))}
      </div>


      {/* <div className='flex bg-white shadow-xl rounded-md ml-10 mr-10 justify-around p-2 m-2'>
        <div className='bg-gray-100 w-4/6 p-2 rounded-md'>
            <h1 className='text-lg'>Main gate of IGDTUW has too much garbage</h1>
        </div>
        <div className='pr-1 bg-green-400 p-2 rounded-md'>
            <h1 className='text-lg'>Resolved</h1>
        </div>
      </div>


      <div className='flex bg-white shadow-xl rounded-md ml-10 mr-10 justify-around p-2 m-2'>
        <div className='bg-gray-100 w-4/6 p-2 rounded-md'>
            <h1 className='text-lg'>Girls washroom of mechanical department</h1>
        </div>
        <div className='pr-1 bg-red-400 p-2 rounded-md'>
            <h1 className='text-lg'>UnResolved</h1>
        </div>
      </div> */}
    </div>
  )
}

export default AllIssues
