import React from "react";
import AboutImg from "../assets/images/about-img.png";

function About() {
  return (
    <section className="bg-secondery text-[#552619] px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-[#B2456E] pb-2">
            About Me
          </h2>
          <p className="pb-5 text-xl ">
            Hello, My Name is Dheeraj Tiwari. I am a Full-Stack Developer. I
            create end-to-end attractive and effective websites.
          </p>
          <p className="pb-5 text-xl">
            I works on both the front-end (client-side) and the back-end
            (server-side) of a website or application. Some front-end
            development skills which I have like HTML, CSS, TailwindCSS,
            JavaScript, React.js, Redux.
          </p>
          <p className="text-xl">
            In backend I know Node.js, Express.js, MongoDB, Python, SQL, Docker.
          </p>
          <p className="text-xl">
            In my spare time I write Bolgs on Medium.com and DEV.to Which is
            related to new technology and programming concepts.
          </p>
        </div>
        <div className="about-img">
          <img
            src={AboutImg}
            alt="about-vector"
            className="lgw-[80%] md:ml-auto h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
