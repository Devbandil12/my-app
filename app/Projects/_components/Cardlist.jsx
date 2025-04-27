import React from "react";
import Card from "./Card";

function Cardlist() {
  const projects = [
    {
      image: "/aicruiter.png",
      link: "https://ai-cruiter-wheat.vercel.app/",
      name: "AiCruiter",
      techUsed: [
        { image: "/nextwhite.webp", name: "nextjs" },
        { image: "/react.webp", name: "Reactjs" },
        { image: "/tailwind.svg", name: "tailwind" },
        { image: "/Ai.webp", name: "gemini Api" },
        { name: "drizzle Orm", image: "/sql.svg" },
      ],

      github: "https://github.com/devbandil12",
    },
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
  ];
  return (
    <div className=" mt-[4rem] md:mt-0 grid grid-cols-1 md:grid-cols-3 px-5 md:px-[5rem] gap-10  ">
      {projects.map((val, ind) => {
        return <Card key={ind} data={val} />;
      })}
    </div>
  );
}

export default Cardlist;
