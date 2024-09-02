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
import { Link } from "react-router-dom";

export default function sideGallery({ activeButton, setActiveButton }) {
  const socials = [
    { link: "https://instagram.com", img: faInstagram },
    { link: "https://discord.com", img: faDiscord },
    { link: "https://artstation.com", img: faArtstation },
    { link: "https://instagram.com", img: faInstagram },
  ];
  const menuitems = ["COMISSIONS", "FIRST", "SECOND", "THIRD"];
  //Set active button in nav bar
  const handleActiveButton = (id) => {
    setActiveButton(id);
  };

  return (
    <div>
      <div className="  fixed  top-0 left-0    w-[100vw] pr-6  border-black">
        <div className="flex justify-between    bg-white    p-2    box-border transform transition-transform duration-300 ease-in-out ">
          <Link to="/">
            <button className="pt-2" onClick={() => setActiveButton("")}>
              -=back
            </button>
          </Link>
          <div className="flex space-x-2 pt-2">
            {menuitems.map((item) => (
              <Link to={`/${item}`}>
                <button
                  className={
                    activeButton === item ? "text-blue-800  " : "text-red-400 "
                  }
                  onClick={() => handleActiveButton(item)}
                  id={item}
                >
                  a{item}
                </button>
              </Link>
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
