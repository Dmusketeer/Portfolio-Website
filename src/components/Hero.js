import React from "react";
import { BsGithub, BsMedium, BsLinkedin } from "react-icons/bs";
import heroImg from "../assets/images/hero-img.png";

function Hero() {
  return (
    <section className="bg-primary px-5 text-[#fcd2ca] py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hello, <br /> I am <span className="text-accent">D</span>heeraj{" "}
            <br />
            FullStack Developer
          </h1>
          <p className="py-5 text-xl text-justify">
            {" "}
            {/* I am proficient in JavaScript, React.js, Node.js And MongoDB. */}
            Seasoned Full-Stack Developer with 2+ years of experience,
            proficient in JavaScript, React.js, Node.js, and MongoDB,
            contributing to the creation of dynamic and scalable web
            applications.
          </p>
          <div className="flex py-5 ">
            <a
              href="https://github.com/Dmusketeer/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-[#6e5494]"
            >
              {<BsGithub size={45} />}
            </a>
            <a
              href="https://dmusketeer.medium.com/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-black"
            >
              {<BsMedium size={45} />}
            </a>
            <a
              href="https://www.linkedin.com/in/dheeraj-tiwari-a53ab3100"
              target="_blank"
              rel="noreferrer"
              className="pr-4 inline-block text-accent hover:text-[#0b5e86]"
            >
              {<BsLinkedin size={45} />}
            </a>
          </div>
          <a
            href=""
            className="text-xl btn bg-accent rounded border-2 border-[#B2456E] text-[#fcd2ca] px-12 py-3 hover:bg-transparent"
          >
            Projects
          </a>
        </div>
        <div className="hero-img">
          <img src={heroImg} className="rounded-full lgw-[80%] ml-auto" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
