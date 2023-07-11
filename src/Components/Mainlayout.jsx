import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from '../Components/ScrollTotop'

function Mainlayout({children}) {
  return (
   <>
    <Navbar/>
    <div>{children}</div>
    <ScrollToTop/>
    <Footer/>
   </>
  )
}

export default Mainlayout