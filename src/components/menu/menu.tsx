import React from "react";
import Socials from "../menu/socials.tsx";
import MenuItems from "../menu/menuItems.tsx";

export default function Menu({ colorRef }) {
  return (
    <div className=" fixed text-[#FFDFD6] text-center text-[0.7vw] w-[25vw] bg-[#694F8E] ">
      <div ref={colorRef} className="w-[25vw] h-[100vh]  ">
        <div className="grid grid-rows-3 h-full  ">
          <div className="text-[5vw] leading-[1em] tracking-tighter mt-[2vw]	">
            <h1>Dzeljka </h1>
            <h1 className="text-[3vw]">Concept artist</h1>
          </div>
          <MenuItems />
          <Socials />
        </div>
      </div>
    </div>
  );
}
