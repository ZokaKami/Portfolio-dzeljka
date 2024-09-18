import React, { useEffect, useState, useContext } from "react";

import Dropdown from "./dropdownTwo.tsx";
import SocialLinks from "./sociallinks.tsx";

export default function Header({ setActiveButton, activeButton }) {
  const [dropDown, setDropdown] = useState(
    JSON.parse(sessionStorage.getItem("dropDown") || "false")
  );
  const [hideOverflow, setHideOverflow] = useState(
    JSON.parse(sessionStorage.getItem("hideOverflow") || "false")
  );

  const [hideNavbar, setHideNavbar] = useState(true);
  const [headerAnimation, setHeaderAnimation] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setDropdown(false);
        setHideNavbar(false);
        setHideOverflow(false);
      } else setHideNavbar(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY - lastScrollY > 200) {
      setHeaderAnimation(false);
      setLastScrollY(currentScrollY);
    } else if (lastScrollY - currentScrollY > 10) {
      setHeaderAnimation(true);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Save the dropdown state to session storage when it changes
  useEffect(() => {
    sessionStorage.setItem("dropDown", JSON.stringify(dropDown));
    sessionStorage.setItem("hideOverflow", JSON.stringify(hideOverflow));
  }, [dropDown, hideOverflow]);

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
          setDropdown={setDropdown}
          setActiveButton={setActiveButton}
          activeButton={activeButton}
        />

        <div className={hideNavbar ? "block" : "hidden"}>
          <Dropdown
            dropDown={dropDown}
            handleDropdown={handleDropdown}
            setActiveButton={setActiveButton}
            activeButton={activeButton}
            hideOverflow={hideOverflow}
          />
        </div>
      </div>
    </div>
  );
}
