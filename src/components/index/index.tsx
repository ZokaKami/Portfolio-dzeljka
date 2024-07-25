import React from "react";
import Menu from "../menu/menu.tsx";
import Gallery from "../gallery/gallery.tsx";

export default function Index() {
  return (
    <div className=" flex w-[100vw] bg-[#FFDFD6]">
      <Menu></Menu>
      <Gallery></Gallery>
    </div>
  );
}
