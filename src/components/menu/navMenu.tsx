import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MenuItems } from "../index/context";
export default function NavMenu({
  setActiveButton,
  activeButton,
  setDropdown,
}) {
  // Access the menu list from context

  const handleActiveButton = (id) => {
    setDropdown(false);
    setActiveButton(id);
  };
  const menuItems = useContext(MenuItems);

  return (
    <div className="hidden lg:flex flex-col pl-[2vw] flex-grow text-[1vw] justify-center">
      <ul className="h-fill text-[1.6em]">
        {menuItems.map((item) => (
          <li
            key={item} // Add key to the list items
            id={item}
            onClick={() => handleActiveButton(item)}
            className={
              activeButton === item ? "text-blue-800" : "text-blue-400"
            }
          >
            <Link to={`/${item}`}>
              {activeButton === item ? (
                <FontAwesomeIcon icon={faChevronRight} />
              ) : (
                ""
              )}
              <button className="pl-[0.5vw] transform active:scale-75 transition-transform">
                {item}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
