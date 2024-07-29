import React from "react";
import Pfp from "../images/ZeljkaPFP.png";
export default function Socials() {
  const Socials = ["LINKEDIN", "INSTAGRAM", "ARTSTATION"];
  return (
    <div className="mx-auto my-auto space-y-[0.5vw]">
      <div className="w-[5vw] h-[5vw] mx-auto   ">
        {" "}
        <img src={Pfp} className="w-full h-full rounded-full mx-auto" alt="" />
      </div>
      <div>
        <a
          className="border-[0.15vw] border-[#FFDFD6]  rounded-full py-[0.1vw] px-[0.4vw]"
          href=""
        >
          SEND MESSAGE X
        </a>
      </div>

      <div className=" flex gap-[1vw]         ">
        {Socials.map((index) => (
          <h1 className="  ">{index}</h1>
        ))}
      </div>
    </div>
  );
}
