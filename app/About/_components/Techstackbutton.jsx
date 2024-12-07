import React from "react";

const Techstackbutton = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-start md:justify-end gap-4">
      {data?.map((tech, index) => (
        <div
          key={index}
          className="flex hover:scale-95 cursor-pointer items-center gap-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg shadow-md transition"
        >
          <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
          <h2 className="text-lg font-semibold">{tech.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Techstackbutton;
