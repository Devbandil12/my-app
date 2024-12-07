import React from "react";
import Card from "./Card";

function Cardlist() {
  const projects = [
    {
      image: "",
      link: "https://make-it-easy-liard.vercel.app/",
      name: "Ai LMS SaaS Application",
      techUsed: ["Ai", "nextjs", "shadcn", "tailwind", "postgress"],
      github: "https://github.com/devbandil12",
      desc: "SAAS, it helps joseekers and student to prepare for particular jobrole and also for coding practice, You can play with flash cards and quizz",
    },
    {
      image: "",
      link: "https://make-it-easy-liard.vercel.app/",
      name: "Ai LMS SaaS Application",
      techUsed: ["Ai", "nextjs", "shadcn", "tailwind", "postgress"],
      github: "https://github.com/devbandil12",
      desc: "SAAS, it helps joseekers and student to prepare for particular jobrole and also for coding practice, You can play with flash cards and quizz",
    },
    {
      image: "",
      link: "https://make-it-easy-liard.vercel.app/",
      name: "Ai LMS SaaS Application",
      techUsed: ["Ai", "nextjs", "shadcn", "tailwind", "postgress"],
      github: "https://github.com/devbandil12",
      desc: "SAAS, it helps joseekers and student to prepare for particular jobrole and also for coding practice, You can play with flash cards and quizz",
    },
    {
      image: "",
      link: "https://make-it-easy-liard.vercel.app/",
      name: "Ai LMS SaaS Application",
      techUsed: ["Ai", "nextjs", "shadcn", "tailwind", "postgress"],
      github: "https://github.com/devbandil12",
      desc: "SAAS, it helps joseekers and student to prepare for particular jobrole and also for coding practice, You can play with flash cards and quizz",
    },
  ];
  return (
    <div className="p-5 flex flex-wrap items-center justify-center gap-5">
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
