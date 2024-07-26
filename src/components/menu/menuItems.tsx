import React from "react";

export default function MenuItems() {
  const MenuItems = [
    "MENU PLACEHOLDER",
    "MENU TEST",
    "MENU INPUT",
    "MENU CREATE",
  ];
  return (
    <div className="my-auto opacity-70">
      {MenuItems.map((index) => (
        <div className="flex justify-between px-[1vw]">
          <span> &lt;</span>
          <button>{index}</button>
          <span> &gt;</span>
        </div>
      ))}
    </div>
  );
}
