import React from "react";
import './UserProfile.css'

const UserProfile = () => {
    return (
      <div className="user-profile-page">
        >
        {/* <NavBar /> */}
        <div className="user-profile-image">
            <img alt="" src="" />
        </div>
        <div className="user-profile-info">
        <h3> IronPlanter </h3>
        <p> 305-555-9876 </p>
        <p> Favorite Plant: Pathos </p>
        <button> Change Photo </button>
        </div>
      </div>
    );
}

export default UserProfile;