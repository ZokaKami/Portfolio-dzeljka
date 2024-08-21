import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
export default function NavMenu({ menuitems, handleDropdown }) {
  const [activeButtonDesktop, setActiveButtonDesktop] = useState("HOME");
  const handleActiveButtonDesktop = (id) => {
    setActiveButtonDesktop(id);
  };
  return (
    <div className="  hidden  lg:flex flex-col px-[2vw] flex-grow text-[1vw] justify-center">
      <ul className="h-fill text-[2em]">
        {menuitems.map((items) => (
          <li
            id={items}
            onClick={() => handleActiveButtonDesktop(items)}
            className={
              activeButtonDesktop === items
                ? "text-blue-800  "
                : "text-blue-400 "
            }
          >
            {activeButtonDesktop === items ? (
              <FontAwesomeIcon icon={faChevronRight} />
            ) : (
              ""
            )}
            <button className="pl-[0.5vw]    transform active:scale-75 transition-transform  ">
              {" "}
              {items}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
