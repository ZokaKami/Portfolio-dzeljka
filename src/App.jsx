import { useEffect, useState } from 'react'
import Index from "./components/index/index.tsx"
 import SideGallery from './components/singlegallery/sideGallery.tsx'
 import HomeGallery from './components/gallery/homeGallery.tsx'
 
 import './App.css'

function App() {
  const [activeButton, setActiveButton] = useState("COMISSIONS");

  return (
    < div >
        
       <SideGallery setActiveButton={setActiveButton} activeButton={activeButton}></SideGallery>
        
        
    </div >
  )
}

export default App
