import React from "react";

function page() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl my-2 text-slate-200 underline-wave">
            Bhopal Award
          </h2>
          <ul className="list-disc text-xl my-5 pl-5 text-slate-100">
            <li>
              I scored an outstanding 93% in my 10th-grade board exams under the
              Bhopal Board.
            </li>
            <li>
              Recognized by my school with an award for sincerity, reflecting my
              dedication and hard work.
            </li>
            <li>
              Secured an impressive 89% in my 12th-grade Bhopal Board
              examinations.
            </li>
            <li>
              Demonstrated a commitment to academic excellence, persistence, and
              consistency.
            </li>
          </ul>
        </div>
        <div className="w-80 h-80 lg:ml-56  border-white border-[0.2rem] rounded-full grid place-items-center">
          {" "}
          <img src="/hero.png" alt="" className="w-72 h-72 rounded-full " />
        </div>
      </div>
      <div className="grid my-10  grid-cols-1 md:grid-cols-2 gap-10">
        <div className=" hidden md:block ">
          <div className="w-80 h-80  border-white border-[0.2rem] rounded-full grid place-items-center">
            {" "}
            <img src="/hero.png" alt="" className="w-72 h-72 rounded-full " />
          </div>
        </div>
        <div className="my-10 ">
          <h2 className="text-2xl text-slate-200 my-2 underline-wave">
            Content Creation Award
          </h2>
          <p className="text-slate-200">
            My journey as a content creator was nothing short of extraordinary.
            Over time, I passionately built a community of over 200,000
            followers/subscribers, sharing engaging and creative content that
            resonated with people. However, as my academic priorities took
            center stage, I made the difficult decision to step away and focus
            on my studies. Despite closing that chapter, the experience fueled
            my creativity and taught me invaluable skills in storytelling,
            audience engagement, and consistency. My passion for content
            creation remains strong, and I look forward to exploring it again
            when the time is right.
          </p>
          <div className="w-80 h-80 block md:hidden  border-white border-[0.2rem] rounded-full grid place-items-center">
            {" "}
            <img src="/hero.png" alt="" className="w-72 h-72 rounded-full " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
