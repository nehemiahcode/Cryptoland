import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { heroData } from '../Datas/Data1'
import { Link } from 'react-router-dom'
function Hero() {
    const {btnText, heading1, heading2, paragraph, HeroImage, coin1, coin2} = heroData
  return (
   <Fade >
     <section className='bg-[#24126A] dark:bg-slate-800 duration-300 pt-5 lg:pt-20 w-full
                     h-auto grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-20  py-10'>
           <div className=' text-center lg:text-left text-white px-5 mb-5'>
            <h1 className=' font-medium text-xl py-4 lg:text-3xl md:text-2xl'>{heading1}</h1>
            <h1 className=' text-3xl font-bold lg:text-5xl md:text-4xl'>{heading2}</h1>
            <p className=' font-medium text-md py-6 lg:text-xl md:text-lg'>{paragraph}</p>
            <button className=' font-medium text-lg no-underline hover:bg-sky-800 hover:ring-2 ring-inset
             ring-white duration-300 bg-sky-600 rounded-full px-9 py-3 my-2'>
             <Link to={'/about'}>{btnText}</Link>
            </button>
           </div>

           <div  className=' object-fill flex justify-center relative my-10'>
            <img src={HeroImage} alt="" className=' h-[400px] lg:h-auto' />
            <img src={coin1} alt="coin_image.jpg" className=' absolute animate-bounce' />
            <img src={coin2} alt="coin2_image.jpg" className=' absolute animate-bounce left-20 sm:left-32 md:left-56 bottom-10' />
           </div>
    </section>
   </Fade>
  )
}

export default Hero