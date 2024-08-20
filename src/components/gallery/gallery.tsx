import React from "react";
import { comissionsImages } from "./comissionsImages.js";
import { comissionsImagesTwo } from "./comissionsImagesTwo.js";
export default function Gallery() {
  const Zoka = ["COMISSIONS"];
  return (
    <div className="pt-8">
      {Zoka.map((index) => (
        <div>
          <div>
            <div className="h-[35vw] md:h-[17vw]   flex place-content-center border-dotted border-b-[0.8vw] 	md:border-b-[0.2vw]  border-black ">
              <h1 className="grid  place-content-center mx-auto text-[9vw] md:text-[4vw] md:mt-[-3vw]">
                {" "}
                {index}
              </h1>
            </div>

            <div className="md:flex md:flex-wrap  pt-[1.5vw]  ">
              {comissionsImages.map((data) => (
                <div className="flex-[50%] md:max-w-[50%] lg:max-w-[33%]  px-[3vw] py-[1.5vw] md:py-[1vw]">
                  <img
                    src={data.name}
                    className="w-[100%] h-auto object-cover"
                    alt={data.alt}
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
