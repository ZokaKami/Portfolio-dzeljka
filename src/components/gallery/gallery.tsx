import React from "react";
import { comissionsImages } from "./comissionsImages.js";
export default function Gallery({ triggerRef }) {
  return (
    <div ref={triggerRef} className="ml-[25vw]  pb-[1vw]">
      <aside className="h-[50vh]     text-[#694F8E] flex place-content-center border-dotted 	border-b-[0.2vw] mx-[0.5vw] border-[#B692C2] ">
        <h1 className="grid  place-content-center mx-auto text-[6vw] ">
          {" "}
          XCOMISSIONS
        </h1>
      </aside>
      <div className="flex flex-wrap pl-[3vw]">
        {comissionsImages.map((data) => (
          <div className="pt-[2vw] px-[1vw]  w-[23vw]">
            <img
              id={data.alt}
              src={data.name}
              className="w-[100%] h-auto object-cover"
              alt={data.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
