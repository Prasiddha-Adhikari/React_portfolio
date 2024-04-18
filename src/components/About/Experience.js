import React from "react";
import './Expirence.css'

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              <div className="experience__box">
                <h2>Library management system</h2>
                <h3>&nbsp; &nbsp;college project</h3>
                <ul>
                  <p>Responsibile for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Developing multiple highly responsive and adaptive website
                      using HTML, CSS, JS and PHP.
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>Developing new user-facing features</span>
                  </li>
                  
                </ul>
              </div>
              <div className="expirence__box">
                <h2>Ecommerce</h2>
                <h3>&nbsp; &nbsp;College project</h3>
                <ul>
                  <p>Responsibile for -</p>
                  <li data-aos="fade-right" data-aos-delay="200">
                    <span>
                      Developing multiple highly responsive and adaptive website
                      using React
                    </span>
                  </li>
                  <li data-aos="fade-right" data-aos-delay="400">
                    <span>Developing new user-facing features</span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
