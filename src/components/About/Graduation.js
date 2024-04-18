import React from "react";
import "./Graduation.css";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>Asian School of Management and Technology.</h1>
            <h2>
              {/* <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              /> */}
              &nbsp;&nbsp;13/08/2019 - Till Date
            </h2>
            <p>
              Pursuing Bachelors Of Computer Application(BCA) from 'Asian School of Management and Technology'.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
