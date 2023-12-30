import React from "react";
import react from "../assets/images/react.jpg";
import deco from "../assets/images/deco.jpg";
import docker from "../assets/images/docker.jpg";
import ts from "../assets/images/typescript.webp";
import tJS from "../assets/images/tJS.webp";
import closure from "../assets/images/closure.jpg";
function Blogs() {
  const post = [
    {
      img: ts,
      title:
        "TypeScript: The Ultimate Tool for Building Scalable and Maintainable Applications",
      url: "https://dmusketeer.medium.com/typescript-the-ultimate-tool-for-building-scalable-and-maintainable-applications-part-1-1ef824756378",
    },
    {
      img: docker,
      title: "Docker: Separating Applications from Infrastructure",
      url: "https://dheeraj9a.hashnode.dev/docker-separating-applications-from-infrastructure",
    },
    {
      img: closure,
      title: "Higher Order Functions and Closures in Python",
      url: "https://dmusketeer.medium.com/higher-order-functions-and-closures-in-python-e95a4bbf39f0",
    },
    {
      img: react,
      title: "ReactJS Dom Introduction",
      url: "https://dmusketeer.medium.com/reactjs-introduction-439b519f493d",
    },
    {
      img: deco,
      title: "Decorators in Python",
      url: "https://dev.to/dmusketeer/decorators-in-python-22g8",
    },

    {
      img: tJS,
      title: "Create 3D Animations and graphics using Threejs(3JS)",
      url: "https://dmusketeer.medium.com/create-3d-animations-and-graphics-using-threejs-3js-a6f682ce308e",
    },
  ];

  return (
    <section className="bg-primary text-[#FBEAE7] px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-3 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-[#B2456E] pb-2">
            Blogs
          </h2>

          <p className="pb-5 text-xl">List Of Medium and DEV Blogs</p>
        </div>
      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-20 text-xl">
        {post.map((item) => {
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
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blogs;
