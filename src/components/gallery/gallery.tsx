import React from "react";
import { comissionsImages } from "./comissionsImages.js";
export default function Gallery({ triggerRef }) {
  return (
    <div ref={triggerRef} className="ml-[33vw]  ">
      <aside className="h-[50vh]     text-[#694F8E] flex place-content-center border-dotted 	border-b-[0.2vw] mx-[0.5vw] border-[#B692C2] ">
        <h1 className="grid  place-content-center mx-auto text-[6vw] ">
          {" "}
          XCOMISSIONS
        </h1>
      </aside>
      <div className="flex flex-wrap">
        {comissionsImages.map((data) => (
          <div className="pt-[2vw] px-[1vw] w-[33vw]">
            <img
              id={data.alt}
              src={data.name}
              className="w-[100%] h-auto object-cover"
              alt={data.alt}
            />
          </div>
        ))}
        <div className="text-[#694F8E] flex justify-end w-[33vw] h-auto  pr-[1vw] text-[4vw]">
          <button className="text-right float-right  ">
            <p>FULL </p>
            <p>GALLERY</p>
          </button>
        </div>
      </div>
    </div>
  );
}
