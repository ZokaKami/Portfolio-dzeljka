import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderShow from "./headerShow.tsx";
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
            />
          }
        />

        <Route
          path={`/${activeButton}`}
          element={
            <SideGallery
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
