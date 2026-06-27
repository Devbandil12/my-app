import React from "react";
import Cardlist from "./_components/Cardlist";

function page() {
  return (
    <div className="text-white bg-black mt-10">
      <div className="text-center mb-10 flex flex-col items-center gap-3">
        <h2 className="text-2xl md:text-5xl font-bold">
          MY <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-md">
          A selection of things I&apos;ve built — full-stack apps, AI tools, and client work.
        </p>
      </div>

      <Cardlist />
    </div>
  );
}

export default page;
