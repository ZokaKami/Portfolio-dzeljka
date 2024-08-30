import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// Fullscreen dropdown menu
export default function Dropdown({
  dropDown,
  socials,
  handleDropdown,
  menuitems,
  setActiveButton,
  activeButton,
  setHideOverflow,
  hideOverflow,
}) {
  // Lock scroll when dropdown is open

  useEffect(() => {
    if (hideOverflow) {
      document.body.style.overflow = "hidden";
      console.log(hideOverflow);
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow style
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropDown]);

  // Set active menu button
  const handleActiveButton = (id) => {
    setActiveButton(id);

    handleDropdown(); // Close dropdown after selecting a menu item
  };

  return (
    <nav
      className={`fixed flex flex-col top-0 left-0 w-full h-[100vh] bg-white text-[3.6vw] md:text-[1.9vw] transform transition-transform duration-700 ease-in-out z-10 ${
        dropDown
          ? "translate-x-0 overflow-auto"
          : "-translate-x-full overflow-hidden"
      }`}
    >
      <ul className="h-fill flex flex-col flex-grow justify-center px-4 text-[2.35em] md:text-[3em]">
        {menuitems.map((item, index) => (
          <li
            key={index} // Add a key prop for each list item
            id={item}
            onClick={() => handleActiveButton(item)}
            className={
              activeButton === item ? "text-blue-800" : "text-blue-400"
            }
          >
            {activeButton === item && <FontAwesomeIcon icon={faChevronRight} />}
            <button className="pl-[4px] sm:pl-[8px] transform active:scale-75 transition-transform">
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="py-2 space-x-2 flex justify-center">
        {socials.map((social, index) => (
          <a
            key={index} // Add a key prop for each social link
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="h-[30px]" icon={social.img} />
          </a>
        ))}
      </div>
    </nav>
  );
}
