import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function Dropdown({
  dropDown,
  socials,
  handleDropdown,
  menuitems,
}) {
  const [activeButton, setActiveButton] = useState("HOME");
  useEffect(() => {
    // Lock scroll when dropdown is open
    if (dropDown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to ensure scroll is unlocked if the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropDown]);
  const handleActiveButton = (id) => {
    setActiveButton(id);
  };
  return (
    <nav
      className={`fixed flex flex-col top-0 left-0 w-full h-[100vh] bg-white text-[3.6vw] md:text-[1.9vw]  transform transition-transform duration-700 ease-in-out z-10 ${
        dropDown
          ? "translate-x-0 overflow-auto"
          : "-translate-x-full overflow-hidden"
      }`}
    >
      <ul className="h-fill  flex flex-col flex-grow justify-center px-4 text-[2.35em] md:text-[3em]">
        {menuitems.map((items) => (
          <li
            id={items}
            onClick={() => handleActiveButton(items)}
            className={
              activeButton === items ? "text-blue-800  " : "text-blue-400 "
            }
          >
            {activeButton === items ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              ""
            )}
            <button
              className="pl-[4px] sm:pl-[8px]  transform active:scale-75 transition-transform  "
              onClick={handleDropdown}
            >
              {" "}
              {items}
            </button>
          </li>
        ))}
      </ul>
      <div className="py-2 space-x-2 flex justify-center">
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-[30px] " icon={social.img} />
          </a>
        ))}
      </div>
    </nav>
  );
}
