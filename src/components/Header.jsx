import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const toggle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <header className=" relative bg-introMoblie text-white h-[70vh] min-h-[350px] text-center rounded-bl-[4.5rem] z-10 overflow-hidden ">
      <nav className="flex justify-between p-8 items-center mb-20 gap-10 relative">
        <span>
          <img src="./images/logo.svg" alt="logo" />
        </span>
        <div className="md:flex-1">
          <span className="block md:hidden">
            <img
              className={open ? "hidden" : "block"}
              onClick={() => setOpen(!open)}
              src="./images/icon-hamburger.svg"
              alt="burger"
            />
            <img
              className={open ? "block" : "hidden"}
              onClick={() => setOpen(!open)}
              src="./images/icon-close.svg"
              alt="close"
            />
          </span>
          <section
            className={`menu ${
              open ? "translate-y-0" : "-translate-y-[200%] md:translate-y-0"
            }`}
          >
            <div className="flex flex-col w-full md:w-auto items-center justify-center md:gap-16 md:flex-row">
              <ul>
                <li
                  onClick={() => toggle(0)}
                  className={`flex gap-2 items-center justify-center relative after:absolute after:h-[2px]  after:transition-all after:top-full after:bg-white after:left-0  ${
                    active === 0
                      ? "after:w-full opacity-90 md:opacity-100"
                      : "after:w-0 "
                  }`}
                >
                  Product
                  <img
                    className={`${
                      active === 0 ? "rotate-[180deg]" : ""
                    } block md:hidden`}
                    src="./images/icon-arrow-dark.svg"
                    alt="arrow-dark"
                  />
                  <img
                    className={`${
                      active === 0 ? "rotate-[180deg]" : ""
                    } hidden md:block`}
                    src="./images/icon-arrow-light.svg"
                    alt="arrow-light"
                  />
                </li>
                <li>
                  <ul className={active === 0 ? "open" : ""}>
                    <li>Overview </li>
                    <li>pricing</li>
                    <li>Marketplace</li>
                    <li>Features</li>
                    <li>Integrations</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li
                  onClick={() => toggle(1)}
                  className={`flex gap-2 items-center justify-center relative after:absolute after:h-[2px]  after:transition-all after:top-full after:bg-white after:left-0  ${
                    active === 1
                      ? "after:w-full opacity-90 md:opacity-100"
                      : "after:w-0"
                  }`}
                >
                  Company
                  <img
                    className={`${
                      active === 1 ? "rotate-[180deg]" : ""
                    } block md:hidden`}
                    src="./images/icon-arrow-dark.svg"
                    alt="arrow-dark"
                  />
                  <img
                    className={`${
                      active === 1 ? "rotate-[180deg]" : ""
                    } hidden md:block`}
                    src="./images/icon-arrow-light.svg"
                    alt="arrow-light"
                  />{" "}
                </li>
                <li>
                  <ul className={active === 1 ? "open" : ""}>
                    <li>About</li>
                    <li>Team</li>
                    <li>Blog</li>
                    <li>CareersR</li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li
                  onClick={() => toggle(2)}
                  className={`flex gap-2 items-center justify-center relative after:absolute after:h-[2px]  after:transition-all after:top-full after:bg-white after:left-0  ${
                    active === 2
                      ? "after:w-full opacity-90 md:opacity-100"
                      : "after:w-0"
                  }`}
                >
                  Connect
                  <img
                    className={`${
                      active === 2 ? "rotate-[180deg]" : ""
                    } block md:hidden`}
                    src="./images/icon-arrow-dark.svg"
                    alt="arrow-dark"
                  />
                  <img
                    className={`${
                      active === 2 ? "rotate-[180deg]" : ""
                    } hidden md:block`}
                    src="./images/icon-arrow-light.svg"
                    alt="arrow-light"
                  />{" "}
                </li>
                <li>
                  <ul className={active === 2 ? "open" : ""}>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>LinkedIn</li>
                  </ul>
                </li>
              </ul>
            </div>
            <hr className="w-full my-5 md:hidden" />
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="text-heaading text-xl ">Login</button>
              <button className="py-3 w-[150px] rounded-full bg-introMoblie md:bg-none md:bg-white md:text-CTAtext md:hover:bg-CTAhoverbackground hover:text-white  text-white transition-all  font-bold ">
                Sign Up
              </button>
            </div>
          </section>
        </div>
      </nav>
      <div className="font-Overpass">
        <h2 className="text-4xl w-11/12 mx-auto mb-8 md:text-6xl font-light">
          A modern publishing platform
        </h2>
        <p className=" w-11/12 mx-auto text-xl md:text-4xl max-w-[600px] text-footerText  text-b mb-8">
          Grow your audience and build your online brand
        </p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button className="btn bg-white hover:bg-CTAhoverbackground  hover:text-white transition-all text-CTAtext font-bold ">
          Start for Free
        </button>
        <button className="btn font-bold hover:bg-white hover:text-CTAtext  transition-all">
          Learn More
        </button>
      </div>
    </header>
  );
};

export default Header;
