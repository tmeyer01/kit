import React from "react";

import Hero from "@/components/Hero";
import Adventure from "@/components/views/Adventure/Adventure";

function adventure({ params }) {
  const backgroundImage = "heroAdventures";

  const adventureId = params.id;

  return (
    <>
      <Hero backgroundImage={backgroundImage} title={adventureId} />
      <Adventure adventureId={adventureId} />
    </>
  );
}

export default adventure;
