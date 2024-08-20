import React from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dropdown({ dropDown, socials }) {
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
  return (
    <nav
      className={`fixed flex flex-col top-0 left-0 w-full h-[100vh] bg-white text-[3.6vw] md:text-[1.9vw]  transform transition-transform duration-300 ease-in-out z-10 ${
        dropDown
          ? "translate-x-0 overflow-auto"
          : "-translate-x-full overflow-hidden"
      }`}
    >
      <ul className="h-fill  flex flex-col flex-grow justify-center px-4 text-[2.35em] md:text-[3em]">
        <li>
          <button> x HOME</button>
        </li>
        <li>
          <button>COMISSIONS</button>
        </li>
        <li>
          <button>PIXEL ART</button>
        </li>
        <li>
          <button>THIRD PARTY</button>
        </li>
        <li>
          <button>FOURTH PARTY</button>
        </li>
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
