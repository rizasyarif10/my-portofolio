import React, {useEffect, useState } from "react";
import { styles } from "../../assets/styles/styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { menuNavbar } from "../../constants";
import { close, menu } from "../../assets/image";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMenu = (data) => {
    navigate(data.path);
  };

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link to={`/`} className="flex items-center gap-2">
            <p className="text-white text-2xl font-bold cursor-pointer flex">
              <span className="sm:block hidden">Portfolio</span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {menuNavbar.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  location.pathname === nav.path
                    ? "text-white"
                    : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => activeMenu(nav)}
              >
                {nav.title}
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              alt="menu"
              src={toggle ? close : menu}
              className="w-[28px] h-[28px] object-contain"
              onClick={handleMenu}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {menuNavbar.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      location.pathname === nav.path
                        ? "text-white"
                        : "text-secondary"
                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      activeMenu(nav);
                      setToggle(!toggle);
                    }}
                  >
                    {nav.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
