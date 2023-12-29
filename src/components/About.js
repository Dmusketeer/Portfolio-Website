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
          <p className="pb-5 text-xl text-justify">
            {/* Hello, My Name is Dheeraj Tiwari. I am a Full-Stack Developer. I
            create end-to-end attractive and effective websites. */}
            Hello, I'm Dheeraj Tiwari. I am a seasoned Full-Stack Developer with
            over 2+ years of experience as a software engineer at TCS, where
            I've honed my skills and contributed to diverse projects. My passion
            lies in creating end-to-end, visually appealing, and highly
            effective websites.
          </p>
          <p className="pb-5 text-xl text-justify">
            {/* I works on both the front-end (client-side) and the back-end
            (server-side) of a website or application. Some front-end
            development skills which I have like HTML, CSS, TailwindCSS,
            JavaScript, React.js, Redux. */}
            I specialize in both front-end and back-end development, ensuring a
            comprehensive approach to building applications. On the front-end, I
            am proficient in HTML, CSS, TailwindCSS, JavaScript, React.js, and
            Redux, crafting engaging user interfaces with a keen eye for design
            and user experience.
          </p>
          <p className="pb-5 text-xl text-justify">
            For the back-end, I have a solid foundation in Node.js, Express.js,
            MongoDB, Python, SQL, and Docker. My experience extends to working
            with serverless architectures, AWS, and configuring Nginx to
            optimize web server performance.
          </p>
          <p className="pb-5 text-xl text-justify">
            Over the past two years at TCS, I've actively contributed to
            projects that leverage cutting-edge technologies, enhancing my
            expertise in serverless computing, cloud services, and
            infrastructure management. This hands-on experience has enriched my
            problem-solving skills and ability to deliver robust and scalable
            solutions.
          </p>
          <p className="pb-5 text-xl text-justify">
            In my spare time, I continue to share my insights and knowledge with
            the tech community. You can find my articles on Medium.com and
            DEV.to, where I delve into new technologies, programming concepts,
            and lessons learned from real-world projects.
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
