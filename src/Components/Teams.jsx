import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import { Teamdata } from '../Datas/Data1';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Teamimage1 from "../assets/Team1.webp"
import Teamimage2 from "../assets/Team2.webp"
import Teamimage3 from "../assets/Team3.webp"
import Teamimage4 from "../assets/Team4.webp"
import {BsLinkedin} from "react-icons/bs"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {FaFacebookSquare} from "react-icons/fa"
import {AiFillTwitterSquare}  from "react-icons/ai"


function Teams() {
    
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    lazyLoad: true,
    speed: 600,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
    const slideOptions = {
        delay: 0,
        duration: 500,
        transition: "all",
      }

      const {heading1, heading2 , paragraph} = Teamdata;
      const Slides = [
        {img:Teamimage1, name:"Deco Milan", description:"Founder",},
        {img:Teamimage2, name:"Liza Marko", description:"Developer"},
        {img:Teamimage3, name:"John Smith", description:"Designer"},
        {img:Teamimage4, name:"Amion Doe", description:"Co-Founder"},
      ]
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "black",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onClick}
          />
        );
      }
    
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              background: "black",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onClick}
          />
        );
      }
  return (
  <section  className=' bg-slate-100 dark:bg-slate-800  h-auto pb-10'>
    <div className=" py-3">
        <Slide cascade {...slideOptions}>
          <h1 className=" text-sky-500 font-medium text-2xl text-center py-3">
            {heading1}
          </h1>
          <h1 className=" text-[#24126A] dark:text-white font-semibold text-4xl lg:text-5xl text-center pb-3">
            {heading2}
          </h1>
          <p className=" text-black dark:text-white font-medium text-md text-center w-[90%]  lg:w-[40%] mx-auto pb-6">
            {paragraph}
          </p>
        </Slide>
      </div>
    <section className=' h-auto lg:w-[40%] w-[85%]  sm:w-[80%] md:w-[70%]  bg-white dark:bg-slate-900 rounded-xl shadow-2xl   mx-auto'>
    <Zoom>
    <Slider {...settings}>
          {Slides.map((slide, index) => (
            <div key={index} className=' h-[350px] py-5'>
             <img src={slide.img} alt="Team_images.jpg" className=' h-[170px] w-[170px] mx-auto rounded-full' /> 
             <h1 className=' text-xl font-medium text-[#24126a] dark:text-sky-600 text-center'>{slide.name}</h1>
             <p className=' text-md font-medium text-zinc-800 dark:text-white text-center'>{slide.description}</p>
             <div className=' flex items-center gap-2 text-xl text-sky-500 mx-auto w-fit my-2'>
             <FaFacebookSquare/>
             <BiLogoInstagramAlt/>
              <AiFillTwitterSquare/>
              <BsLinkedin/>
             </div>
           </div>
          ))}
         
        </Slider>   
    </Zoom>
    </section>
  </section>
  )
  }

export default Teams