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
        <p> Favorite Plant: Pathos </p>
      </div>
      <NewPlant />
      <PlantCard />
    </div>
  );
};

export default UserProfile;
