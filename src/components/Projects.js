import React from "react";
import tsTodo from "../assets/projects/tsTODO.png";
function Projects() {
  const Projects = [
    {
      img: tsTodo,
      title: "Todo Application Using TypeScript",
      url: "https://type-script-projects.vercel.app/",
    },
    {
      img: "",
      title: "",
      url: "",
    },
  ];
  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-[#B2456E] pb-2">
            Projects
          </h2>
          <p className="pb-5 text-2xl">
            Stay Tuned! Working on it. Soon it'll be updated....
          </p>
        </div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-20 text-xl">
        {Projects.map((item) => {
          return (
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="w-[100px] h-[300px] rounded"
              />
              <h3 className="py-5 text-xl">{item.title}</h3>
              <a
                target="_blank"
                rel="noreferrer"
                href={item.url}
                className=" btn bg-accent rounded border-2 border-[#B2456E] text-[#fcd2ca] px-6 py-3 hover:bg-transparent"
              >
                Live
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
