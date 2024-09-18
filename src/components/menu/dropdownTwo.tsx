import React, { useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { MenuItems, Socials } from "../index/context";
// Fullscreen dropdown menu
export default function Dropdown({
  dropDown,

  handleDropdown,

  setActiveButton,
  activeButton,

  hideOverflow,
}) {
  // Lock scroll when dropdown is open
  const navigate = useNavigate();
  const socials = useContext(Socials);
  useEffect(() => {
    if (hideOverflow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [hideOverflow]);

  // Set active menu button
  const handleActiveButton = (id) => {
    setActiveButton(id);
    handleDropdown(false);

    // Add a short delay to allow the dropdown to close before navigating
    setTimeout(() => {
      navigate(`/${id}`);
    }, 200); // Adjust the delay based on your dropdown animation duration
  };
  const menuItems = useContext(MenuItems);
  return (
    <nav
      className={`fixed flex flex-col top-0 left-0 w-full h-[100vh] bg-white text-[3.6vw] md:text-[1.9vw] transform transition-transform duration-700 ease-in-out z-10 ${
        dropDown
          ? "translate-x-0 overflow-auto"
          : "-translate-x-full overflow-hidden"
      }`}
    >
      <ul className="h-fill flex flex-col flex-grow justify-center px-4 text-[2.35em] md:text-[3em]">
        {menuItems.map((item, index) => (
          <li
            key={index} // Add a key prop for each list item
            id={item}
            className={
              activeButton === item ? "text-blue-800" : "text-blue-400"
            }
          >
            {activeButton === item && <FontAwesomeIcon icon={faChevronRight} />}
            <button
              onClick={() => handleActiveButton(item)}
              className="pl-[4px] sm:pl-[8px] transform active:scale-75 transition-transform"
            >
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
