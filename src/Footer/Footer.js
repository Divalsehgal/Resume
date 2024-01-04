import React from "react";
import "../App.css";
import SOCIAL_PROFILE from "../List/SocialProfilesList";
import "./Footer.css"
const SocialProfile = (props) => {
  const { image, link } = props.socialProfile;
  return (
    <span >
      <a href={link}>
        <img
          alt="profiles"
          src={image}
          style={{ height: 35, width: 35, margin: 10 }}
        />
      </a>
    </span>
  );
};
function Footer() {
  return (
    <div className="Footer">
      <h2>Connect with me !</h2>
      <div>
        {SOCIAL_PROFILE.map((SOCIAL_PROFILE) => (
          <SocialProfile
            key={SOCIAL_PROFILE.id}
            socialProfile={SOCIAL_PROFILE}
          />
        ))}
      </div>
    </div>
  );
}

export default Footer;
