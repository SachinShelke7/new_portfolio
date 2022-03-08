import React from "react";
import { Element } from "react-scroll";

const Education = () => {
  return (
    <Element name="education" className="element">
      <div className="flex w-full justify-center items-center pt-32">
        <div className="sachin p-10">
          <h2 className="text-center py-2">Education</h2>

          <div>
            <p>
              <span>Stream Name:</span>
              Bachelor of Business Administration
            </p>
            <p>
              <span>College:</span>
              New Arts, Commerce and Science College, Ahmednagar
            </p>
            <p>
              <span>University:</span>
              Savitribai Phule Pune University
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Education;
