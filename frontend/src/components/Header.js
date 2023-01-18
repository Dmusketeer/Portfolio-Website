import React, { useState } from "react";
import { MdViewList } from "react-icons/md";
import { CgClose } from "react-icons/cg";
function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <header className="flex justify-between px-5 py-2 bg-primary text-[#fcd2ca] fixed w-full z-10">
        <a href="/" className="logo text-2xl font-bold text-accent">
          Dheeraj
        </a>

        {/* Nav for Desktop */}
        <nav className="hidden md:block">
          <ul className="flex">
            <li>
              <a href="/#about">ABOUT</a>
            </li>
            <li>
              <a href="/#projects">PROJECTS</a>
            </li>
            <li>
              <a href="/#blog">BLOGS</a>
            </li>
            <li>
              <a href="/#contact">CONTACT</a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                RESUME
              </a>
            </li>
          </ul>
        </nav>

        {/* Nav for Mobile */}
        <nav
          className={!toggle ? "mobile-nav left-[100%]" : "mobile-nav left-0"}
        >
          <ul className="flex flex-col">
            <li className="mt-[130px]">
              <a href="/#about">ABOUT</a>
            </li>
            <li className="mt-[40px]">
              <a href="/#projects">PROJECTS</a>
            </li>
            <li className="mt-[40px]">
              <a href="/#blog">BLOGS</a>
            </li>
            <li className="mt-[40px]">
              <a href="/#contact">CONTACT</a>
            </li>
            <li className="mt-[40px]">
              <a href="/#resume">RESUME</a>
            </li>
          </ul>
        </nav>

        <button className="block md:hidden" onClick={handleToggle}>
          {!toggle ? <MdViewList size={30} /> : <CgClose size={30} />}
        </button>
      </header>
    </>
  );
}

export default Header;
