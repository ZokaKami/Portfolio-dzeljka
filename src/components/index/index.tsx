import React, { useEffect } from "react";
import Menu from "../menu/menu.tsx";
import Gallery from "../gallery/gallery.tsx";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Index() {
  const colorRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(colorRef.current, {
      backgroundColor: "#FFDFD6",
      color: "#694F8E",
      borderColor: "#694F8E",

      overwrite: "auto",
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top top",
        end: "+=10%",
        markers: true,
      },
    });
  }, []);

  return (
    <div className=" flex w-[100vw] bg-[#FFDFD6] ">
      <Menu colorRef={colorRef}></Menu>

      <div className="block">
        <Gallery triggerRef={triggerRef}></Gallery>
        <Gallery></Gallery>
        <Gallery></Gallery>
      </div>
    </div>
  );
}
