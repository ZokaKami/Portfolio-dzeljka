import React from "react";
import { comissionsImages } from "./comissionsImages.js";
export default function Gallery() {
  console.log(comissionsImages);

  return (
    <div className="ml-[33vw]   ">
      <aside className="h-[50vh]   text-center text-white flex place-content-center border-dotted 	border-b-[0.2vw] mx-[0.5vw] border-[#B692C2] ">
        <h1 className="grid  place-content-center text-[6vw] "> XCOMISSIONS</h1>
      </aside>
      <div className="flex "></div>
      {comissionsImages.map((data) => (
        <div>
          <img
            id={data.alt}
            src={data.name}
            className="w-[100%] h-auto object-cover"
            alt={data.alt}
          />
        </div>
      ))}
    </div>
  );
}
