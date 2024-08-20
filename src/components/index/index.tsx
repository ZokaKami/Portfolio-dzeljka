import React, { useEffect } from "react";
import Header from "../menu/header.tsx";
import Gallery from "../gallery/gallery.tsx";
import Dropdown from "../menu/dropdownTwo.tsx";

export default function Index() {
  return (
    <div>
      <Header />

      <Gallery />
    </div>
  );
}
