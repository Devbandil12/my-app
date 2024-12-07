import React from "react";
import Biography from "./_components/Biography";
import Qualification from "./_components/SkillsPage";

function page() {
  return (
    <div className="w-full bg-gradient-to-br from-black-1 via-black-2 to-black-3 ">
      <div className="p-5 text-center">
        <h2 className="text-3xl mt-5 font-black text-white">
          Passion Fuels Purpose!
        </h2>
      </div>

      <Biography />
    </div>
  );
}

export default page;
