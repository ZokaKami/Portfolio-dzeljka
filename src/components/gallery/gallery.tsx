import React from "react";
import { comissionsImages } from "./comissionsImages.js";
export default function Gallery({ triggerRef }) {
  return (
    <div ref={triggerRef} className="ml-[33vw]   ">
      <aside className="h-[50vh]   text-center text-white flex place-content-center border-dotted 	border-b-[0.2vw] mx-[0.5vw] border-[#B692C2] ">
        <h1 className="grid  place-content-center text-[6vw] "> XCOMISSIONS</h1>
      </aside>
      <div className="grid grid-cols-2 ">
        {comissionsImages.map((data) => (
          <div className="pt-[2vw] px-[1vw]">
            <img
              id={data.alt}
              src={data.name}
              className="w-[100%] h-auto object-cover"
              alt={data.alt}
            />
          </div>
        ))}
        <div className="   my-auto text-right pr-[3vw] text-[4vw]">
          <button className="text-right">
            <p>FULL </p>
            <p>GALLERY</p>
          </button>
        </div>
      </div>
    </div>
  );
}
