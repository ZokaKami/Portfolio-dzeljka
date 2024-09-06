import React from "react";
import { comissionsImages } from "./comissionsImages.js";

export default function Gallery({ activeButton }) {
  const sectionTitle = ["COMISSIONS", "FIRST", "SECOND", "THIRD"];
  const desiredKeys = sectionTitle.map((title) => title.toLowerCase());
  console.log(comissionsImages.title);
  return (
    <div className="pt-[1.5vw] ">
      {desiredKeys.map((index) => (
        <div className="pb-[4vw]">
          <div>
            <div className="h-[35vw] mt-[10vw] md:mt-0 md:h-[17vw] lg:h-[9vw]   flex place-content-center border-dotted border-b-[0.8vw] 	md:border-b-[0.2vw]  border-black ">
              <h1 className="grid  place-content-center mx-auto text-[9vw] md:text-[3vw] md:mt-[1vw] ">
                {" "}
                {index.toUpperCase()}
              </h1>
            </div>

            <div className="md:flex md:flex-wrap  pt-[0.5vw] lg:pl-[0.5vw]  ">
              {comissionsImages[index].images.map((data, idx) => (
                <div
                  key={idx}
                  className="flex-[50%] md:max-w-[50%] lg:max-w-[33%] px-[0.5vw] py-[1.5vw] md:py-[0.5vw] lg:p-[0.3vw]"
                >
                  <img
                    src={data.name}
                    alt={data.alt}
                    className="md:h-[70vw] h-full   lg:h-[76vh] w-[100%]  object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
