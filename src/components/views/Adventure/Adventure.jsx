import React from "react";

const adventureData = [
  {
    id: "treeTosea",
    eventDiscription: "lorsum ipsum",
  },
  {
    id: "octet",
    eventDiscription: "lorsum ipsum",
  },
  {
    id: "threehundred",
    eventDiscription: "lorsum ipsum",
  },
  {
    id: "cvn2023",
    eventDiscription: "lorsum ipsum",
  },
  {
    id: "underbiking",
    eventDiscription: "lorsum ipsum",
  },
];

function Adventure({ adventureId }) {
  console.log("inside adventure card");
  return (
    <div>
      {/* <div className="flex text-black">{adventure.id}</div> */}
      hello
      {/* <div>{adventure.eventDiscription}</div> */}
    </div>
  );
}

export default Adventure;
