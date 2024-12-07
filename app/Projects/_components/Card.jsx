import React from "react";

const Card = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto  border border-gray-400 hover:scale-105 transition-all bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <img
        src={data.image || "/ai lms.png"}
        alt={`${data.name}'s Profile`}
        className="w-full  h-48 object-cover"
      />

      {/* Skills */}

      {/* Content Section */}
      <div className="p-5">
        {/* Name */}
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-sm text-gray-400 mt-2  ">
          {data?.techUsed.map((skill, index) => (
            <span key={index}>
              {skill}
              {index < data.techUsed.length - 1 && ", "}
            </span>
          ))}
        </p>
        {/* Description */}
        <p className="text-gray-300 mt-4">{data.desc}</p>

        {/* Icons Section */}
        <div className="flex gap-4 justify-between mt-5">
          {/* GitHub Link */}
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <img
              src="/github.svg"
              className="w-10 bg-white rounded-full border border-white"
              alt=""
            />
          </a>

          {/* Visit Link */}
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <p className="underline text-blue-500"> Visit Now</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
