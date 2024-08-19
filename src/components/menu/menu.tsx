import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Pfp from "../images/ZeljkaPFP.png";
import Dropdown from "./dropdownTwo.tsx";

export default function Menu() {
  const socials = [
    { link: "https://instagram.com", img: faInstagram },
    { link: "https://discord.com", img: faDiscord },
    { link: "https://artstation.com", img: faArtstation },
    { link: "https://instagram.com", img: faInstagram },
  ];
  const [dropDown, setDropdown] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log(lastScrollY + "x");
    console.log(currentScrollY + "y");

    if (currentScrollY - lastScrollY > 400) {
      // User is scrolling down, hide the header
      setShowHeader(false);
      setLastScrollY(currentScrollY);
    } else if (lastScrollY - currentScrollY > 20) {
      // User is scrolling up, show the header
      setShowHeader(true);
      setLastScrollY(currentScrollY);
    }

    // Update the last scroll position
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleDropdown = () => {
    setDropdown(!dropDown);
    console.log(dropDown);
  };
  return (
    <div
      className={`fixed  bg-white  w-[100vw] p-2  box-border transform transition-transform duration-300 ease-in-out ${
        showHeader ? "tratranslate-y-0" : "translate-y-[-70px]"
      }`}
    >
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
            className={`w=[40px] fixed ${
              dropDown ? "text-white" : "text-black"
            }`}
          >
            <FontAwesomeIcon
              icon={faBars}
              className="w-[40px] h-[40px] text-black"
            />
          </button>
        </div>
      </div>

      <Dropdown dropDown={dropDown} />
    </div>
  );
}
