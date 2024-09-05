import { useEffect, useState } from 'react'
 
 import HeaderShow from "./components/index/headerShow.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideGallery from "./components/singlegallery/sideGallery.tsx";
 import './App.css'

function App() {
 

  const [activeButton, setActiveButton] = useState("");
  useEffect(() => {
    console.log("Location changed:", location.pathname); // Debugging statement
    const path = location.pathname;
    const id = path.split("/").filter(Boolean).pop(); // Get the last part of the URL
    console.log("Extracted ID:", id); // Debugging statement

    if (id) {
      setActiveButton(id.toUpperCase());
    } else {
      setActiveButton("");
    }
  }, [location, setActiveButton]);
  console.log(activeButton)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HeaderShow
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></HeaderShow>
          }
        ></Route>
        <Route
          path={`/:id`}
          element={
            <SideGallery
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            ></SideGallery>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App
