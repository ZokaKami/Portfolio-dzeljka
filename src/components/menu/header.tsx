import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";

import Dropdown from "./dropdownTwo.tsx";
import SocialLinks from "./sociallinks.tsx";

export default function Header({ setActiveButton, activeButton }) {
  const socials = [
    { link: "https://instagram.com", img: faInstagram },
    { link: "https://discord.com", img: faDiscord },
    { link: "https://artstation.com", img: faArtstation },
    { link: "https://instagram.com", img: faInstagram },
  ];
  const menuitems = ["COMISSIONS", "FIRST", "SECOND", "THIRD"];
  //Mobile dropdown button
  const [dropDown, setDropdown] = useState(false);
  //Set active button in nav menu

  //Hide mobile navbar functions on desktop
  const [hideNavbar, setHideNavbar] = useState(false);
  //Usestate for the full screen dropdown animation
  const [headerAnimation, setHeaderAnimation] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideOverflow, setHideOverflow] = useState(false);

  //UseEffect to turn off mobile functions on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setDropdown(false);
        setHideNavbar(false);
        setHideOverflow(false);
        console.log(hideOverflow);
      } else setHideNavbar(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Show and hide header on scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY - lastScrollY > 200) {
      // User is scrolling down, hide the header
      setHeaderAnimation(false);
      setLastScrollY(currentScrollY);
    } else if (lastScrollY - currentScrollY > 10) {
      // User is scrolling up, show the header
      setHeaderAnimation(true);
      setLastScrollY(currentScrollY);
    }
  };

  //UseEffect to check for scroll distance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleDropdown = () => {
    setDropdown(!dropDown);
    setHideOverflow(!hideOverflow);
  };
  return (
    <div className="  fixed  top-0 left-0   w-[100vw] lg:w-1/5   lg:h-[100vh]  lg:border-r-4 border-black">
      <div
        className={`     bg-white    p-2 lg:p-0   box-border transform transition-transform duration-300 ease-in-out ${
          headerAnimation
            ? "tratranslate-y-0"
            : "translate-y-[-70px] lg:translate-y-0"
        }`}
      >
        <SocialLinks
          handleDropdown={handleDropdown}
          dropDown={dropDown}
          socials={socials}
          menuitems={menuitems}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />

        <div className={hideNavbar ? "block" : "hidden"}>
          <Dropdown
            dropDown={dropDown}
            socials={socials}
            handleDropdown={handleDropdown}
            menuitems={menuitems}
            setActiveButton={setActiveButton}
            activeButton={activeButton}
            setHideOverflow={setHideOverflow}
            hideOverflow={hideOverflow}
          />
        </div>
      </div>
    </div>
  );
}
