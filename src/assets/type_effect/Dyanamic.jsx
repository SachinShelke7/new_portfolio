import React from "react";

const Dyanamic = () => {
  return (
    <div className="text-3xl font-medium flex space-x-2 font-saira">
      <h2>I'M</h2>
      <dynamic-type
        words="SACHIN SHELKE; REACT FRONTEND DEVELOPER; SEARCHING FOR JOB."
        loop="true"
        typeDelay="150"
        deleteStartAfter="750"
        deleteDelay="25"
        colors="#F97316; #2563EB; #888;"
      ></dynamic-type>
    </div>
  );
};

export default Dyanamic;
