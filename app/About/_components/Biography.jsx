import React from "react";
import Techstackbutton from "./Techstackbutton";

function Biography() {
  const Backend = [
    { name: "Javascript", icon: "/js.jfif" },
    { name: "React.js", icon: "/react.webp" },
    { name: "Next.js", icon: "/nextwhite.webp" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "SQL", icon: "/sql.svg" },
    { name: "Node.js", icon: "/nodejs.webp" },
    { name: "MongoDB", icon: "/mongodb.webp" },
    { name: "Express.js", icon: "/express.webp" },
    { name: "Redux", icon: "/redux.webp" },
    { name: "Git", icon: "/github.svg" },
    { name: "Docker", icon: "/docker-icon.webp" },
    { name: "Postman", icon: "/postman.webp" },
    { name: "GSAP", icon: "/Gsap.webp" },
  ];

  return (
    <div className="  w-full mt-[5rem]  text-white">
      {/* Biography Section */}

      {/* Tech Stack Section */}

      <h2 className="text-3xl my-10 font-bold text-center">My TECH STACK</h2>

      <Techstackbutton data={Backend} />
    </div>
  );
}

export default Biography;
