import React, { useContext } from "react";

import Header from "../menu/header.tsx";
import Gallery from "../gallery/homeGallery.tsx";

export default function HeaderShow({ setActiveButton, activeButton }) {
  return (
    <div className="flex lg:grid lg:grid-cols-5">
      <div className="col-span-1">
        <Header setActiveButton={setActiveButton} activeButton={activeButton} />
      </div>
      <div className="col-span-4">
        <Gallery activeButton={activeButton} />
      </div>
    </div>
  );
}
