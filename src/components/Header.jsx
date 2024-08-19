import { NavLink } from "react-router-dom";
import { useState } from "react";

import { facebook, instagram, menu, telegram } from "../assets/icons";
import { routeNames } from "../constants/constants";
import { logoSmall, logoSmallWhite } from "../assets/images";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenubarOpen, setIsMenubarOpen] = useState(false);
  // Show dropdown on hover
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  //show menubar
  const handleMenubar = () => {
    setIsMenubarOpen(!isMenubarOpen);
  };

  return (
    <div className="py-3 px-5 lg:px-10 bg-white flex justify-between items-center ">
      <img src={logoSmall} alt="logo" className=" w-8 lg:w-12 h-8 lg:h-12" />

      {/* page tabs  */}

      <div className="lg:flex hidden ">
        {routeNames.map((data, index) => (
          <div
            key={index}
            className="relative text-lg"
            onMouseEnter={data.dropdown ? handleMouseEnter : null}
            onMouseLeave={data.dropdown ? handleMouseLeave : null}
          >
            {data.dropdown ? (
              <>
                <NavLink to={data.route} className=" block">
                  {data.name}
                </NavLink>
                {isDropdownOpen && (
                  <div className="absolute top-full  py-2 bg-white shadow-lg rounded-2xl">
                    {data.dropdown.map((subItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subItem.route}
                        className="block px-6 py-2 hover:font-bold"
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                to={data.route}
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 border-b-primary duration-200 ease-in-out mx-3"
                    : " mx-3"
                }
              >
                {data.name}
              </NavLink>
            )}
          </div>
        ))}
      </div>

      {/* social links  */}

      <div className="hidden lg:flex justify-between   ">
        <img src={facebook} alt="facebook" className=" w-8 h-8" />
        <img src={instagram} alt="instagram" className=" ml-5 w-8 h-8" />
        <img src={telegram} alt="telegram" className=" ml-5 w-8 h-8" />
      </div>

      {isMenubarOpen ? (
        <div
          className="fixed lg:hidden z-50 top-0 right-0 w-56 md:w-64 h-full bg-primary px-5 py-5 font-semibold text-lg "
          onClick={handleMenubar}
        >
          <div className="">
            <button
              className="w-10 h-10 object-contain "
              onClick={handleMenubar}
            >
              <img src={logoSmallWhite} alt="" />
            </button>
          </div>
          <nav className="flex flex-col mt-4 mb-4">
            {routeNames.map((data, index) => (
              <div className=" hover:font-bold text-white  " key={index}>
                <NavLink
                  to={data.route}
                  className={({ isActive }) =>
                    isActive
                      ? " block border-b-2 border-b-white duration-200 ease-in-out my-2"
                      : " bg-primary"
                  }
                >
                  {data.name}
                </NavLink>
              </div>
            ))}
          </nav>
          <div className=" ">
            <div className="flex justify-between bg-white items-center ">
              <img src={facebook} alt="facebook" className=" w-8 h-8" />
              <img src={instagram} alt="instagram" className=" ml-5 w-8 h-8" />
              <img src={telegram} alt="telegram" className=" ml-5 w-8 h-8" />
            </div>
          </div>
        </div>
      ) : (
        <button className=" lg:hidden " onClick={handleMenubar}>
          <img src={menu} alt="" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Header;
