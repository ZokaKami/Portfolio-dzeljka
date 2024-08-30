import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import HomeGalleryTwo from "./homeGalleryTwo.tsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Pfp from "../images/ZeljkaPFP.png";

export default function sideGallery({ activeButton, setActiveButton }) {
  const socials = [
    { link: "https://instagram.com", img: faInstagram },
    { link: "https://discord.com", img: faDiscord },
    { link: "https://artstation.com", img: faArtstation },
    { link: "https://instagram.com", img: faInstagram },
  ];
  const menuitems = ["COMISSIONS", "FANART", "FIRST", "SECOND", "THIRD"];
  //Set active button in nav bar
  const handleActiveButton = (id) => {
    setActiveButton(id);
  };

  return (
    <div>
      <div className="  fixed  top-0 left-0    w-[100vw] pr-6  border-black">
        <div className="flex justify-between    bg-white    p-2    box-border transform transition-transform duration-300 ease-in-out ">
          <h1 className="pt-2" onClick={() => setActiveButton("COMISSIONS")}>
            -=back
          </h1>
          <div className="flex space-x-2 pt-2">
            {menuitems.map((item) => (
              <button
                className={
                  activeButton === item ? "text-blue-800  " : "text-red-400 "
                }
                onClick={() => handleActiveButton(item)}
                id={item}
              >
                {item}
              </button>
            ))}
          </div>
          <img src={Pfp} className="h-[45px] w-[45px]  rounded-full" alt="" />
        </div>
      </div>
      <HomeGalleryTwo
        activeButton={activeButton}
        menuitems={menuitems}
      ></HomeGalleryTwo>
    </div>
  );
}
