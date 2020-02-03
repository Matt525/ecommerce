import React from "react";
import "./About.scss";
import profile_image from "./photo_source/Profile_Pic.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        {/* About Text  */}
        <div class="about-text">
          <h1>Matt Staton</h1>
          {/* <div id="line" /> */}
          <p className="subtitle">
            Front-End Web Developer From James Island, SC.
          </p>
          <p class="info">
          Adaptable professional with proof of knowledge of front-end web development, and problem solving skills. Aiming to leverage my skills to successfully 
          fill the junior web developer role at your company. I am an extremely results-driven, reliable and collaborative individual
          that is seeking the opportunity to become a part of an extremely collaborative team with an equal amount of enthusiasm towards enhancing the customers experience through the web. 
          </p>

          {/* Download button for resume */}
          <p class="button">
            <a class="waves-effect waves-light btn-small">Download CV</a>
          </p>
        </div>

        {/* Image */}
        <div class="image">
          <img
            src={profile_image}
            class="img-responsive"
            alt="profile_picture"
          />
        </div>
      </div>
    );
  }
}

export default About;
