import React from "react";
import { comissionsImages } from "../gallery/comissionsImages.js";

export default function Gallery({ activeButton, menuitems }) {
  const lowerCaseTitle = activeButton.toLowerCase();
  const render = comissionsImages[lowerCaseTitle]?.images;

  return (
    <div className="pt-8">
      <div>
        <div>
          <div className="h-[35vw] md:h-[17vw] lg:h-[20vw]   flex place-content-center border-dotted border-b-[0.8vw] 	md:border-b-[0.2vw]  border-black ">
            <h1 className="grid  place-content-center mx-auto text-[9vw] md:text-[4vw] md:mt-[1vw] lg:mt-[-3vw]">
              {" "}
              {activeButton}
            </h1>
          </div>

          <div className="md:flex md:flex-wrap  pt-[1.5vw]  ">
            {render.map((data, idx) => (
              <div
                key={idx}
                className="flex-[50%] md:max-w-[50%] lg:max-w-[33%] px-[3vw] py-[1.5vw] md:py-[1vw] lg:p-[0.4vw]"
              >
                <img
                  src={data.name}
                  alt={data.alt}
                  className="w-[100%] h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
