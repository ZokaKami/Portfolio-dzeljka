import React from "react";
import { comissionsImages } from "../gallery/comissionsImages.js";

export default function Gallery({ activeButton, menuitems }) {
  const lowerCaseTitle = activeButton.toLowerCase();
  const render = comissionsImages[lowerCaseTitle]?.images || []; //Default to empty array

  return (
    <div className="pt-[2vw]">
      <div>
        <div>
          <div className="md:flex md:flex-wrap justify-center  pt-[3vw]   ">
            {render.map((data, idx) => (
              <div
                key={idx}
                className="flex-[50%]  md:max-w-[50%] lg:max-w-[30%] px-[0.5vw] pt-[1vw] md:pt-[0.5vw]   "
              >
                <img
                  src={data.name}
                  alt={data.alt}
                  className="w-[100%] md:h-[70vw] h-full lg:h-[44vw] py-[0.5vw]     object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
