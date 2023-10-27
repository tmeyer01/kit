import React from "react";

import Hero from "@/components/Hero";
import Adventure from "@/components/views/Adventure/Adventure";

function adventure({ params }) {
  const backgroundImage = "heroAdventures";

  const adventureId = params.id;

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

  const adventure = adventureData.find(
    (adventure) => adventure.id === adventureId
  );

  const findAdventure = (adventureId) => {
    console.log("AdventureId: ", adventureId);

    const adventure = adventureData.find(
      (adventure) => adventure.id === adventureId
    );

    console.log("made it here");

    if (adventure === undefined) {
      console.log("inside if at undefined conditonal");
      return (
        <>
          <div> Adventure Not Found</div>;
        </>
      );
    } else {
      console.log("Not undefined");
      return (
        <>
          {/* <Hero backgroundImage={backgroundImage} title={adventureId} /> */}
          <Adventure adventureId={adventure} />
        </>
      );
    }
  };

  findAdventure(adventureId);

  // return (
  //   <>
  //     <Hero backgroundImage={backgroundImage} title={adventureId} />
  //     <Adventure adventureId={adventureId} />
  //   </>
  // );
}

export default adventure;
