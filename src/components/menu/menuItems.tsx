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
        <h1>{index}</h1>
      ))}
    </div>
  );
}
