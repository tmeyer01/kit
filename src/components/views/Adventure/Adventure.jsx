import React from "react";

function Adventure({ adventureId }) {
  console.log("Inside the dynamic adventure card", adventureId);

  return <div>{adventureId}</div>;
}

export default Adventure;
