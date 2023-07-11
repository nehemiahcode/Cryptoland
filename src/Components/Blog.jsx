import React from "react";
import Blogimage1 from "../assets/blog1.webp";
import Blogimage2 from "../assets/blog2.webp";
import Blogimage3 from "../assets/blog3.webp";
import Circleimage from "../assets/circle.svg";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaUserCheck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";
import Styler from "./Accordion";

function BlogComponent() {
    const BlogCards = [
        {img:Blogimage1, heading:"The Intersection Where Blockchain Meets Energy."},
        {img:Blogimage2, heading:"Pros & Cons of Premined Cryptocurrencies."},
        {img:Blogimage3, heading:"How & Where To Market Your ICO Startup.", margin:true},
    ]
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${Circleimage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "200px",
          backgroundPosition: "left",
          backgroundBlendMode: "color-dodge",
        }}
        className=" bg-[#341c97] dark:bg-slate-800 border-b-2 w-full h-[300px] flex justify-center items-center text-white"
      >
        <div>
          <h1 className=" font-semibold text-4xl">Blog</h1>
          <div className=" flex items-center gap-2 mt-3">
            <h1 className="text-gray-200 hover:text-sky-500 text-xl font-medium">
              <Link to={"/about?=about_page"}>About</Link>
            </h1>
            <LiaAngleRightSolid className=" text-white text-xl" />
            <h1 className="text-gray-400 text-xl font-medium">Blog</h1>
          </div>
        </div>
      </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full h-auto lg:px-20 md:px-10 py-10">
       {BlogCards.map((card, index) => (
        <Zoom key={index}>
             <div  className={`  sm:h-[auto] h-[auto] pb-5 sm:w-[70%] md:w-[100%] w-[90%] ${card.margin && "md:ml-[55%] lg:m-0"} rounded-xl mx-auto shadow-2xl bg-white dark:bg-slate-700`}>
         <img src={card.img} alt="" className=" object-contain flex-1 rounded-t-xl hover:scale-90 duration-300" />
         <div className=" flex justify-around items-center my-3">
             <div className=" flex gap-2 items-center dark:text-white"><FaUserCheck className=" text-sky-500  text-lg"/> 10 June 2023  </div>
             <div className=" flex gap-2 items-center dark:text-white"><FaClock className=" text-sky-400 text-lg"/>Anjelio Joly</div>
         </div>
         <div className=" px-8">
         <h1 className=" text-black dark:text-white font-bold text-xl">
           {card.heading}
          </h1>
          <p className=" text-black dark:text-white font-medium py-3">
          Lorem ipsum dolor sit amet,
           adipscing elitr, sit gifted sed
            diam nonumy eirmod tempor ividunt dolore.
          </p>
          <button className=" text-purple-600 dark:text-red-500 underline font-normal text-md">Read more</button>
         </div>
     </div>
        </Zoom>
       ))}
      </section>
      <Styler/>
    </>
  );
}

export default BlogComponent;
