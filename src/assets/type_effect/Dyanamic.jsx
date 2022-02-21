import React from "react";

const Dyanamic = () => {
  return (
    <div className="text-3xl font-medium flex space-x-2">
      <h2>I'M</h2>
      <dynamic-type
        words="SACHIN SHELKE; REACT FRONTEND DEVELOPER; SEARCHING FOR JOB."
        loop="true"
        typeDelay="100"
        deleteStartAfter="750"
        deleteDelay="25"
        colors="#ed4b4b; #3f7ff7; #888;"
      ></dynamic-type>
    </div>
  );
};

export default Dyanamic;
