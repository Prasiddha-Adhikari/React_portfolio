import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="about-intro">
      <div className="about-intro__container">
        <div className="about-intro__header">
          <h2 className="about-intro__number">
            0<span>1</span>
          </h2>
          <h1 data-aos="fade-down" data-aos-offset="0">
            H<span>ello</span>.
          </h1>
        </div>
        <div className="about-intro__description">
          <p data-aos="fade-right">
            I am <span>Prasiddha Adhikari</span>
          </p>
          <p data-aos="fade-right" data-aos-delay="200">
            I enjoy building websites and always enthusiastic about creating new
            front-end and backend features.
          </p>
          <p data-aos="fade-right" data-aos-delay="400">
            Passionate Full-stack Developer with 1 years of experience in
            developing highly adaptive and responsive websites using React.
          </p>
          <p data-aos="fade-right" data-aos-delay="600">
            I also have basic understanding of server side development using
            Node.js, Express.js and MongoDB
          </p>
          <p data-aos="fade-right" data-aos-delay="800"></p>
          <div className="about-intro__emoji">:&nbsp;</div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
