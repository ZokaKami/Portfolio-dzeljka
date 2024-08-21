import React, { useEffect } from "react";
import Header from "../menu/header.tsx";
import Gallery from "../gallery/gallery.tsx";
import Dropdown from "../menu/dropdownTwo.tsx";

export default function Index() {
  return (
    <div className="flex lg:grid lg:grid-cols-4">
      <div className="col-span-1">
        {" "}
        <Header />
      </div>

      <div className="col-span-3">
        {" "}
        <Gallery />
      </div>
    </div>
  );
}
