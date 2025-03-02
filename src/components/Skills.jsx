import React from "react";
import html from "../../src/assets/html.png";
import css from "../../src/assets/css.jpg";
import java from "../../src/assets/java.png";
import javascript from "../../src/assets/javascript.png";
import reactjs from "../../src/assets/reactjs.png";
import springBoot from "../../src/assets/springBoot.jpg";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 6,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[120px] md:h-[120px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[70px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
