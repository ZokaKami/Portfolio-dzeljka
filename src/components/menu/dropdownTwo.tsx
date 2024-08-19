import React from "react";
import { useEffect } from "react";
export default function Dropdown({ dropDown }) {
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
      className={`fixed top-0 left-0 w-full h-[100vh] bg-white text-[3.6vw] md:text-[1.9vw]  transform transition-transform duration-300 ease-in-out z-10 ${
        dropDown
          ? "translate-x-0 overflow-auto"
          : "-translate-x-full overflow-hidden"
      }`}
    >
      <ul className="h-full  flex flex-col justify-center px-8 text-[2.35em] md:text-[3em]">
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
    </nav>
  );
}
