import React from "react";
import tsTodo from "../assets/projects/tsTODO.png";
import bookvista from "../assets/images/bookvista.png";
import bookstore from "../assets/images/bookstore.png";
import passBuddy from "../assets/images/passBuddy.png";
import careConnect from "../assets/images/careConnect.png";
function Projects() {
  const Projects = [
    {
      img: tsTodo,
      title: "Todo Application Using TypeScript",
      url: "https://type-script-projects.vercel.app/",
    },
    {
      img: bookvista,
      title: "BookVista MERN Booking Application Using TypeScript",
      url: "https://github.com/Dmusketeer/BookVista",
    },
    {
      img: bookstore,
      title: "Book Store Appliction Using MERN Stack",
      url: "https://github.com/Dmusketeer/FullStack-Projects/tree/main/BookStrore",
    },
    {
      img: passBuddy,
      title: "Password Buddy",
      url: "https://github.com/Dmusketeer/Passbuddy",
    },
    {
      img: careConnect,
      title: "MedAppoint",
      url: "https://github.com/Dmusketeer/MedAppoint",
    },
  ];
  return (
    <div className="bg-primary text-white px-5 py-32">
      <section className="bg-primary text-white px-5 py-32" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-[#B2456E] pb-2">
              Projects
            </h2>
            <p className="pb-5 text-2xl">List Of Projects</p>
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
      <div className="border-b-8 border-[#FBEAE7] mx-auto lg:mx-[300px] rounded-md" />
    </div>
  );
}

export default Projects;
