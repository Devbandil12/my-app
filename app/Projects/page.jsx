import React from "react";
import Cardlist from "./_components/Cardlist";

function page() {
  return (
    <div className="text-white bg-black mt-10">
      <h2 className="text-2xl md:text-5xl   my-10 font-bold text-center">
        MY <span className=" text-blue-500">Projects</span>
      </h2>

      <Cardlist />
    </div>
  );
}

export default page;
