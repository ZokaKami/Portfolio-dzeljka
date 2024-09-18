import React, { useEffect, useContext } from "react";

import HomeGalleryTwo from "./homeGalleryTwo.tsx";
import { MenuItems } from "../index/context.tsx";
import Pfp from "../images/ZeljkaPFP.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function SideGallery({ activeButton, setActiveButton }) {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = useContext(MenuItems);

  useEffect(() => {
    const path = location.pathname;
    const id = path.split("/").filter(Boolean).pop(); // Get the last part of the URL

    if (id) {
      setActiveButton(id.toUpperCase());
    } else {
      setActiveButton("");
    }
  }, [location, setActiveButton]);

  const handleActiveButton = (id) => {
    setActiveButton(id);
    navigate(`/${id}`);
  };

  const handleBackButton = () => {
    setActiveButton(""); // Reset the active button state
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="  ">
      <div className="fixed top-0 left-0 w-full pr-[1vw] border-black border-b-[0.2vw] border-dotted">
        <div className="flex justify-between bg-white p-[0.5vw] box-border transform transition-transform duration-300 ease-in-out">
          <button
            className="text-[3vw] md:text-[2vw]"
            onClick={handleBackButton}
          >
            Home
          </button>
          <ul className="flex space-x-[1.5vw] pt-[0.5vw] list-none text-[1.5vw]  ">
            {menuItems.map((item) => (
              <li
                key={item}
                id={item}
                onClick={() => handleActiveButton(item)}
                className={`cursor-pointer  transform active:scale-75 transition-transform text-[3vw] md:text-[2vw] ${
                  activeButton === item ? "text-blue-800" : "text-blue-400"
                }`}
              >
                <Link to={`/${item}`}>
                  <p className="pl-[0.5vw]   transform active:scale-75 transition-transform">
                    {item}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <img
            src={Pfp}
            className="md:h-[4vw] md:w-[4vw] w-[5vw] rounded-full"
            alt="Profile"
          />
        </div>
      </div>
      <HomeGalleryTwo activeButton={activeButton} />
    </div>
  );
}
