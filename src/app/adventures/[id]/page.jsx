import React from "react";

import Hero from "@/components/Hero";
import Adventure from "@/components/views/Adventure/Adventure";

function adventure({ params }) {
  const backgroundImage = "heroAdventures";

  console.log(params);
  return (
    <>
      <Hero backgroundImage={backgroundImage} />
      {/* <Adventure title={title} /> */}
    </>
  );
}

export default adventure;
