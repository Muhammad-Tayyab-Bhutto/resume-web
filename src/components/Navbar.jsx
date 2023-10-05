import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

import About from "./About.jsx";
import Work from "./Work.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import Blog from "./Blog.jsx";

const NavItems = ({ title, to, classProps, onClick }) => {
  return (
    <>
      <Link to={to} className={`mx-4 cursor-pointer ${classProps}`} onClick={onClick}>
        {title}
      </Link>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    if (initialLoad) {
      // Redirect to the About page on initial load
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const closeMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="flex flex-row">
      <BrowserRouter>
        <div className="flex relative -translate-y-[950px] ">
          {!toggleMenu && (
            <HiMenuAlt4
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              fontSize={28}
              className="text-white md:hidden cursor-pointer"
              onClick={() => setToggleMenu(false)}
            />
          )}
          {toggleMenu && (
            <ul
              className="z-10 fixed -top-4 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={closeMenu} />
              </li>
              {[
                { title: "About", to: "/about" },
                { title: "Resume", to: "/resume" },
                { title: "Work", to: "/work" },
                { title: "Blog", to: "/blog" },
                { title: "Contact", to: "/contact" },
              ].map((item, index) => (
                <NavItems
                  key={item.title + index}
                  title={item.title}
                  to={item.to}
                  classProps="my-2 text-lg"
                  onClick={closeMenu}
                />
              ))}
            </ul>
          )}
        </div>
        <div className="md:flex hidden flex-row gap-5">
          <nav className="w-[200px] mx-12 rounded-md bg-gray-900 text-white p-8 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
            <button className="text-white md:flex hidden list-none flex-col justify-between items-center flex-initial">
              {[
                { title: "About", to: "/about" },
                { title: "Resume", to: "/resume" },
                { title: "Work", to: "/work" },
                { title: "Blog", to: "/blog" },
                { title: "Contact", to: "/contact" },
              ].map((item, index) => {
                return (
                  <NavItems
                    key={item.title + index}
                    title={item.title}
                    to={item.to}
                    classProps={"hover:bg-rose-600 rounded-lg p-6"}
                    onClick={closeMenu}
                  />
                );
              })}
            </button>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
