import React from "react";
import ProfileInfo from "./ProfileComponents/ProfileInfo";
// import PointsEarned from "./ProfileComponents/PointsEarned";
import AllIssues from "./ProfileComponents/AllIssues";

const Profile = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 h-[92.5vh]">
      <div className="col-span-3 row-span-1 m-1">

        <ProfileInfo/>

      </div>
      <div className="col-span-2 row-span-1 m-1">

        {/* <PointsEarned/> */}


      </div>
      <div className="col-span-5 row-span-1 m-1">

        <AllIssues/>

      </div>
    </div>
  );
};

export default Profile;
