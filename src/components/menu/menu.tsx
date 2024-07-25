import React from "react";
import Socials from "../menu/socials.tsx";
import MenuItems from "../menu/menuItems.tsx";

export default function Menu() {
  return (
    <div className=" fixed text-white text-center text-[0.9vw] w-[33vw]">
      <div className="w-[33vw] h-[100vh] bg-[#B692C2]">
        <div className="grid grid-rows-3 h-full  ">
          <div className="text-[7vw] leading-[1em] tracking-tighter mt-[2vw]	">
            <h1>Dzeljka </h1>
            <h1 className="text-[5vw]">Concept artist</h1>
          </div>
          <MenuItems />
          <Socials />
        </div>
      </div>
    </div>
  );
}
