import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function NavMenu({ menuitems, setActiveButton, activeButton }) {
  // Set active navigation bar menu with HOME being default

  const handleActiveButton = (id) => {
    setActiveButton(id);
    // Close dropdown after selecting a menu item
  };
  return (
    <div className="  hidden  lg:flex flex-col pl-[4vw] flex-grow text-[1vw] justify-center">
      <ul className="h-fill text-[1.6em]">
        {menuitems.map((item) => (
          <li
            id={item}
            onClick={() => handleActiveButton(item)}
            className={
              activeButton === item ? "text-blue-800  " : "text-blue-400 "
            }
          >
            {activeButton === item ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              ""
            )}
            <button className="pl-[0.5vw]    transform active:scale-75 transition-transform  ">
              {" "}
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
