import React from "react";
import NewPlant from "../NewPlant/NewPlant";
import PlantCard from "../PlantCard/PlantCard";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user-profile-page">
      <div className="user-profile-image">
        <img alt="" src="" />
      </div>
      <div className="user-profile-info">
        <h3> IronPlanter </h3>
        <p> 305-555-9876 </p>
        <p> Favorite Plant: Pathos </p>
        <button> Change Photo </button>
      </div>
      <NewPlant />
      <PlantCard />
    </div>
  );
};

export default UserProfile;
