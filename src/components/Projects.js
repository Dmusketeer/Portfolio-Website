import React from "react";

function Projects() {
  const projects = [];
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
    </section>
  );
}

export default Projects;
