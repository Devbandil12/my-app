import React from "react";
import Cardlist from "./_components/Cardlist";

function page() {
  return (
    <div className="text-white mt-10">
      <h2 className="text-2xl md:text-5xl  my-10 font-bold text-center">
        MY Featured Projects
      </h2>
      <Cardlist />
    </div>
  );
}

export default page;
