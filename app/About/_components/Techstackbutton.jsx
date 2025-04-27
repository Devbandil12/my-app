import React from "react";

const Techstackbutton = ({ data }) => {
  return (
    <div className="grid grid-cols-2 px-5 w-full md:grid-cols-5 md:px-[5rem] gap-5">
      {data?.map((tech, index) => (
        <div
          key={index + Math.random()}
          className="flex  flex-col justify-center  rounded-2xl py-8 border-gray-600 border-[0.5px] hover:scale-95 cursor-pointer items-center gap-y-5 p-2 bg-gray-800 hover:bg-gray-600 shadow-md transition"
        >
          {tech?.name == "Express.js" ? (
            <h2 className=" font-light text-4xl font-serif mt-3 text-gray-100">
              EX
            </h2>
          ) : (
            <img
              src={tech?.icon}
              alt={tech?.name}
              className=" w-[3rem] h-[3rem] "
            />
          )}
          <h2 className="text-lg font-semibold">{tech?.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Techstackbutton;
