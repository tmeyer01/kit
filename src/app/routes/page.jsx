import React from "react";

import Hero from "@/components/Hero";
import Routes from "@/components/views/RoutesBlog/RoutesBlog";

export default function routes() {
  const backgroundImage = "heroLanding";
  const title = "Routes";

  return (
    <>
      <Hero backgroundImage={backgroundImage} title={title} />
      <Routes />
    </>
  );
}
