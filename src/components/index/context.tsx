// src/components/index/context.tsx
import React, { createContext } from "react";
import {
  faInstagram,
  faDiscord,
  faArtstation,
} from "@fortawesome/free-brands-svg-icons";

// Define types
type MenuItemsType = string[];
type SocialsType = { link: string; img: any }[];

// Create contexts with types
const MenuItems = createContext<MenuItemsType>([
  "COMISSIONS",
  "FIRST",
  "SECOND",
  "THIRD",
]);

const Socials = createContext<SocialsType>([
  { link: "https://instagram.com", img: faInstagram },
  { link: "https://discord.com", img: faDiscord },
  { link: "https://artstation.com", img: faArtstation },
]);

// Export contexts individually
export { MenuItems, Socials };
