import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import Features from '../Components/Features'
import Details from '../Components/Details'
import Teams from '../Components/Teams'
import Testimonials from '../Components/Testimonials'
import Accordion from '../Components/Accordion'
import Mainlayout from '../Components/Mainlayout'
import { useState } from 'react'
import BitCoing from '../assets/bit2.webp'

function Home() {
  const [animating, setAnimating] = useState(true);

useEffect(() => {
  const Timer = setTimeout(() => {
    setAnimating(false)
  }, 3000);
  return () => clearTimeout(Timer)
})

  return (
  <>
  {animating ? (
  <div className=" bg-slate-900 fixed top-0 left-0 h-full w-full flex justify-center items-center">
         <img src={BitCoing} alt="Loading_image.jpg"  className=' animate-spin'/> 
  </div>
  ):(
    <Mainlayout>
      <Hero/>
      <Features/>
      <Details/>
      <Teams/>
      <Testimonials/>
      <Accordion />
    </Mainlayout>

  )}
  </>
  )
}

export default Home