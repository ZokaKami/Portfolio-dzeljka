import Pfp from "../images/ZeljkaPFP.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinks({ handleDropdown, dropDown, socials }) {
  return (
    <div className="flex justify-around z-50">
      <img src={Pfp} className="h-[45px]   rounded-full" alt="" />
      <nav className="flex  my-auto space-x-2  mx-auto">
        {socials.map((social) => (
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="h-[30px] " icon={social.img} />
          </a>
        ))}
      </nav>
      <div className="h-[40px] w-[40px] z-50  ">
        <button
          onClick={handleDropdown}
          className={`w=[40px] fixed ${dropDown ? "text-white" : "text-black"}`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="w-[40px] h-[40px] text-black"
          />
        </button>
      </div>
    </div>
  );
}
