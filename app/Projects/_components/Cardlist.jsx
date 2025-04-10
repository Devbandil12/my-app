import React from "react";
import Card from "./Card";

function Cardlist() {
  const projects = [
    {
      image: "/notes.png",
      link: "https://make-it-easy-liard.vercel.app/",
      name: "Make it Easy",
      techUsed: [
        { image: "/Ai.webp", name: "gemini Api" },
        { image: "/nextwhite.webp", name: "nextjs" },
        { image: "/react.webp", name: "Reactjs" },
        { image: "/tailwind.svg", name: "tailwind" },
        { name: "drizzle Orm", image: "/sql.svg" },
      ],
      github: "https://github.com/devbandil12",
    },
    {
      image: "/mock.png",
      link: "https://github.com/devbandil12",
      name: "Make it Happen",
      techUsed: [
        { image: "/Ai.webp", name: "gemini Api" },
        { image: "/nextwhite.webp", name: "nextjs" },
        { image: "/react.webp", name: "Reactjs" },
        { image: "/tailwind.svg", name: "tailwind" },
        { name: "Redux", image: "/redux.webp" },
      ],
      github: "https://github.com/devbandil12",
    },
    {
      image: "/portfolio.png",
      link: "https://dev-portfolio-phi-wheat.vercel.app/",
      name: "Portfolio",
      techUsed: [
        { image: "/nextwhite.webp", name: "nextjs" },
        { image: "/react.webp", name: "Reactjs" },
        { image: "/tailwind.svg", name: "tailwind" },
      ],

      github: "https://github.com/devbandil12",
    },
  ];
  return (
    <div className="p-5 flex flex-wrap justify-evenly items-center  ">
      {projects.map((val, ind) => {
        return (
          <div key={ind} className=" sm:w-full md:w-64 ">
            <Card data={val} />
          </div>
        );
      })}
    </div>
  );
}

export default Cardlist;
