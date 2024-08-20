import React from "react";

export default function Dropdown() {
  return (
    <nav className="w-full     text-[1.3rem] pt-2      ">
      <ul className="grid  justify-center text-center space-y-2 ">
        <li>
          <button>Comissions</button>
        </li>
        <li>
          <button>Pixel art</button>
        </li>
        <li>
          <button>Third party</button>
        </li>
      </ul>
    </nav>
  );
}
