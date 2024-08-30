import React, { useState } from "react";
import Header from "../menu/header.tsx";
import Gallery from "../gallery/homeGallery.tsx";

export default function Index() {
  const [activeButton, setActiveButton] = useState("COMISSIONS");
  return (
    <div className="flex lg:grid lg:grid-cols-5">
      <div className="col-span-1">
        {" "}
        <Header setActiveButton={setActiveButton} activeButton={activeButton} />
      </div>

      <div className="col-span-4">
        {" "}
        <Gallery activeButton={activeButton} />
      </div>
    </div>
  );
}
