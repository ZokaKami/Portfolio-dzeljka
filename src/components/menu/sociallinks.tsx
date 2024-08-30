import Pfp from "../images/ZeljkaPFP.png";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMenu from "./navMenu.tsx";
export default function SocialLinks({
  handleDropdown,
  dropDown,
  socials,
  menuitems,
  setActiveButton,
  activeButton,
}) {
  return (
    <div className="flex   lg:flex-col lg:h-[100vh] lg:pb-[0.5vw]  justify-around z-50">
      <img
        src={Pfp}
        className="h-[45px] w-[45px] lg:w-[11vw] lg:h-[11vw] lg:mx-auto lg:mt-[1.5vw] rounded-full"
        alt=""
      />

      <NavMenu
        menuitems={menuitems}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
      />

      <nav className="flex  my-auto space-x-2  mx-auto">
        {socials.map((social) => (
          <a
            href={social.link}
            className=" transform active:scale-75 transition-transform "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="h-[30px] " icon={social.img} />
          </a>
        ))}
      </nav>
      <div className="h-[40px] w-[40px] z-50 lg:hidden ">
        <button
          onClick={handleDropdown}
          className={`w=[40px] fixed  text-black  transform active:scale-75   transition-transform ${
            dropDown ? "rotate-90 " : " "
          }`}
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
