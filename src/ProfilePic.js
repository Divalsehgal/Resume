import React from "react";
import "./Profile.css";
import pic from "./assets/pic.jpg";

function ProfilePic() {
  return (
    <div className="ProfilePic">
      
      <img alt="profilepic"  src={pic} />
    </div>
  );
}

export default ProfilePic;
