import React, { useState } from "react";
import Header from "../menu/header.tsx";
import Gallery from "../gallery/homeGallery.tsx";
import HeaderShow from ".//headerShow.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideGallery from "../singlegallery/sideGallery.tsx";

export default function Index() {
  const [activeButton, setActiveButton] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HeaderShow
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></HeaderShow>
          }
        ></Route>
        <Route
          path={`/${activeButton}`}
          element={
            <SideGallery
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></SideGallery>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
