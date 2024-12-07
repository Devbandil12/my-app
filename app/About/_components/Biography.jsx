import React from "react";
import Techstackbutton from "./Techstackbutton";

function Biography() {
  const Backend = [
    { name: "Node.js", icon: "/nodejs.webp" },
    { name: "MongoDB", icon: "/mongodb.webp" },
    { name: "Express.js", icon: "/express.svg" },
    { name: "SQL", icon: "/sql.svg" },
  ];
  const Other = [
    { name: "Git", icon: "/github.svg" },
    { name: "Docker", icon: "/docker.webp" },
    { name: "Postman", icon: "/postman.webp" },
    { name: "GSAP", icon: "/Gsap.webp" },
  ];
  const Frontend = [
    { name: "React.js", icon: "/react.webp" },
    { name: "Redux", icon: "/redux.webp" },
    { name: "Tailwind CSS", icon: "/tailwind.svg" },
    { name: "Next.js", icon: "/nextjs.webp" },
  ];
  return (
    <div className=" p-10 min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Biography Section */}
        <div className="md:col-span-1 text-start">
          <h2 className="text-3xl font-bold">Biography</h2>
          <div className="mt-2 mb-5 border-b-4 border-green-500 w-24"></div>
          <p>
            Greetings! I'm a dedicated full-stack developer with over 2 years of
            hands-on experience in creating dynamic web application and saas
            application. My expertise lies in JavaScript, React.js (also
            Next.js),and the MERN stack, alongside a solid command of
            technologies like sql, MongoDB, and state management libraries like
            Redux/Zustand.
          </p>
          <p className="mt-5">
            I've brought numerous projects to life, showcasing my proficiency in
            these technologies. Additionally, my curiosity extends to the AI
            realm where I've integrated Ai in some of my projects. I've worked
            on full end-to-end projects, harnessing the power of Large Language
            Models using OpenAI's ChatGPT for NLP tasks along with React.js as a
            frontend, Node.js as backend, and MongoDB and sql as databases.
          </p>
          <p className="mt-5">
            Looking forward to connecting and exploring new opportunities in the
            tech world!
          </p>
        </div>

        {/* Profile Section */}
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Gradient Border */}
            <div className="absolute inset-0 w-full h-full rounded-full border-4 border-y-slate-300 animate-gradient-border"></div>
            {/* Profile Image */}
            <div className="w-80 h-80 rounded-full border-4 border-gray-500 flex items-center justify-center">
              <img
                src="/hero.png"
                alt="Profile"
                className="rounded-full rotate-3 w-64 h-64"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="md:col-span-1 text-start md:text-right">
          <h2 className="text-3xl font-bold">My TECH STACK</h2>
          <div className="mt-2 mb-5 border-b-4  border-green-500 w-24 md:ml-auto"></div>
          <h2 className="text-xl font-bold my-2 text-gray-300 underline-slide">
            Frontend
          </h2>
          <Techstackbutton data={Frontend} />
          <h2 className="text-xl font-bold my-2 text-gray-300 underline-slide">
            Backend
          </h2>
          <Techstackbutton data={Backend} />
          <h2 className="text-xl font-bold my-2 text-gray-300 underline-slide">
            Extra
          </h2>
          <Techstackbutton data={Other} />
        </div>
      </div>
    </div>
  );
}

export default Biography;
