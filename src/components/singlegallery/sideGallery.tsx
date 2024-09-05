import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";
import HomeGalleryTwo from "./homeGalleryTwo.tsx";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Pfp from "../images/ZeljkaPFP.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function SideGallery({ activeButton, setActiveButton }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed:", location.pathname); // Debugging statement
    const path = location.pathname;
    const id = path.split("/").filter(Boolean).pop(); // Get the last part of the URL
    console.log("Extracted ID:", id); // Debugging statement

    if (id) {
      setActiveButton(id.toUpperCase());
    } else {
      setActiveButton("");
    }
  }, [location, setActiveButton]);

  const handleActiveButton = (id) => {
    setActiveButton(id);
    navigate(`/${id}`);
  };

  const handleBackButton = () => {
    setActiveButton(""); // Reset the active button state
    navigate("/"); // Navigate to the homepage
  };

  const menuitems = ["COMISSIONS", "FIRST", "SECOND", "THIRD"];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full pr-6 border-black">
        <div className="flex justify-between bg-white p-2 box-border transform transition-transform duration-300 ease-in-out">
          <button className="pt-2" onClick={handleBackButton}>
            -=back
          </button>
          <ul className="flex space-x-2 pt-2 list-none">
            {menuitems.map((item) => (
              <li
                key={item}
                id={item}
                onClick={() => handleActiveButton(item)}
                className={`cursor-pointer ${
                  activeButton === item ? "text-blue-800" : "text-blue-400"
                }`}
              >
                <Link to={`/${item}`}>
                  {activeButton === item && (
                    <FontAwesomeIcon icon={faChevronRight} />
                  )}
                  <span className="pl-2 transform active:scale-75 transition-transform">
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <img src={Pfp} className="h-12 w-12 rounded-full" alt="Profile" />
        </div>
      </div>
      <HomeGalleryTwo activeButton={activeButton} menuitems={menuitems} />
    </div>
  );
}
