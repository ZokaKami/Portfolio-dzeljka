import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";

import Dropdown from "./dropdownTwo.tsx";
import SocialLinks from "./sociallinks.tsx";

export default function Header() {
  const socials = [
    { link: "https://instagram.com", img: faInstagram },
    { link: "https://discord.com", img: faDiscord },
    { link: "https://artstation.com", img: faArtstation },
    { link: "https://instagram.com", img: faInstagram },
  ];
  const menuitems = [
    "HOME",
    "COMISSIONS",
    "PIXEL ART",
    "THIRD PARTY",
    "FOURTH PARTY",
  ];
  const [dropDown, setDropdown] = useState(false);

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY - lastScrollY > 200) {
      // User is scrolling down, hide the header
      setShowHeader(false);
      setLastScrollY(currentScrollY);
    } else if (lastScrollY - currentScrollY > 10) {
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
  };
  return (
    <div className="  fixed  top-0 left-0   w-[100vw] lg:w-1/4   lg:h-[100vh]  lg:border-r-4 border-black">
      <div
        className={`     bg-white    p-2 lg:p-0   box-border transform transition-transform duration-300 ease-in-out ${
          showHeader
            ? "tratranslate-y-0"
            : "translate-y-[-70px] lg:translate-y-0"
        }`}
      >
        <SocialLinks
          handleDropdown={handleDropdown}
          dropDown={dropDown}
          socials={socials}
          menuitems={menuitems}
        />

        <Dropdown
          dropDown={dropDown}
          socials={socials}
          handleDropdown={handleDropdown}
          menuitems={menuitems}
        />
      </div>
    </div>
  );
}
