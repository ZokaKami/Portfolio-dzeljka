import React from "react";
import { comissionsImages } from "./comissionsImages.js";

export default function Gallery({ activeButton }) {
  const sectionTitle = ["COMISSIONS", "FIRST", "SECOND", "THIRD"];
  const desiredKeys = sectionTitle.map((title) => title.toLowerCase());
  console.log(comissionsImages.title);
  return (
    <div className="pt-8">
      {desiredKeys.map((index) => (
        <div>
          <div>
            <div className="h-[35vw] md:h-[17vw] lg:h-[20vw]   flex place-content-center border-dotted border-b-[0.8vw] 	md:border-b-[0.2vw]  border-black ">
              <h1 className="grid  place-content-center mx-auto text-[9vw] md:text-[4vw] md:mt-[1vw] lg:mt-[-3vw]">
                {" "}
                {index.toUpperCase()}
              </h1>
            </div>

            <div className="md:flex md:flex-wrap  pt-[1vw] lg:pl-[0.7vw]  ">
              {comissionsImages[index].images.map((data, idx) => (
                <div
                  key={idx}
                  className="flex-[50%] md:max-w-[50%] lg:max-w-[33%] px-[0.5vw] py-[1.5vw] md:py-[0.5vw] lg:p-[0.2vw]"
                >
                  <img
                    src={data.name}
                    alt={data.alt}
                    className="w-[100%] h-full object-cover"
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
