import { useEffect, useState } from 'react'
import Index from "./components/index/index.tsx"
 import './App.css'

function App() {
  useEffect(() =>{
    (async() =>{
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })()
   },[])

  return (
    < div className='flex'>
        
       <Index></Index>
       
    </div >
  )
}

export default App
