import React, { useEffect } from "react";
import Menu from "../menu/menu.tsx";
import Gallery from "../gallery/gallery.tsx";
import Dropdown from "../menu/dropdownTwo.tsx";

export default function Index() {
  return (
    <div>
      <Menu></Menu>

      <Gallery />
    </div>
  );
}
