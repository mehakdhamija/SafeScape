import React from "react";
import avatar from "../../assets/girlAvatar.png"

const ProfileInfo = ({ name, email, city, country }) => {
  return (
    <div className="bg-gradient-to-r from-[#c5e5ff] to-[#5da4fb] shadow-lg rounded-lg overflow-hidden grid grid-cols-2 p-2 ml-10 mt-10 drop-shadow-2xl">
     
      <div className="px-2">
        <h2 className="text-2xl font-bold mb-3">Your Profile</h2>
        <div className="flex flex-col w-[200px]">
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Name: Mehak</span> {name}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Email: mehak@gmail.com</span> {email}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">City: Delhi</span> {city}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Country: India</span> {country}
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <img src={avatar} alt="Girl avatar" className="h-24 w-24 translate-x-6 rounded-full" />
      </div>

    </div>
  );
};

export default ProfileInfo;
