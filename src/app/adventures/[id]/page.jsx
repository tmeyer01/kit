import React from "react";

import Hero from "@/components/Hero";
import Adventure from "@/components/views/Adventure/Adventure";

function adventure({ params }) {
  return (
    <>
      <div className=" h-28 bg-background" />
      {/* <div className=" flex flex-col md:flex-row  w-3/4 justify-center"> */}
      <div className="flex flex-col md:flex-row pt-6">
        <div className="h-80 md:w-1/2 mr-4 border-red-800 border-2">Image</div>
        <div className="h-80 md:w-1/2 ml-4 border-red-800 border-2">
          Discription
        </div>
      </div>
      <div className="flex flex-col p-2 justify-center">
        Write up:
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          repellendus dolor doloribus quaerat nesciunt delectus suscipit
          exercitationem! Mollitia fugiat explicabo nisi corporis possimus
          voluptate voluptas doloribus accusamus cum, sit nam?
        </p>
        <p className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          repellendus dolor doloribus quaerat nesciunt delectus suscipit
          exercitationem! Mollitia fugiat explicabo nisi corporis possimus
          voluptate voluptas doloribus accusamus cum, sit nam?
        </p>
      </div>
      <div className="h-80">Image Gallery:</div>
      {/* </div> */}
    </>
  );
}

export default adventure;
