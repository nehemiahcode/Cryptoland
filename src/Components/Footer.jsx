import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const Paragraph = [
    { text: " Marketing" },
    { text: "Analytics" },
    { text: "Commerce" },
    { text: "Insights" },
  ];
  const Solution = [
    { text: " Pricing" },
    { text: " Documentation" },
    { text: " Guides" },
    { text: "API Status" },
  ];

  return (
   <Fade>
     <footer style={{}} className=" bg-[#24126A] dark:bg-slate-700 w-[95%] rounded-lg shadow-md mx-auto h-auto py-20 lg:px-20 md:px-9 px-5">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4">
        <div className=" w-full ">
          <div className=" flex items-center gap-2 mb-2">
            <RiMoneyDollarCircleFill className=" text-white dark:text-sky-600 text-5xl" />
            <p className=" font-medium text-white  text-2xl">Crytoland</p>
          </div>
          <p className=" text-white font-medium leading-normal">
            Making the world a better place through constructing elegant
            hierarchies.
          </p>

          <div className=" flex items-center gap-4 text-xl text-white  w-fit my-5">
            <FaFacebookSquare />
            <BiLogoInstagramAlt />
            <AiFillTwitterSquare />
            <BsLinkedin />
          </div>
        </div>
        <div className=" w-full">
          <h1 className=" text-white font-medium text-xl">Solution</h1>

          {Paragraph.map((para, index) => (
            <p key={index} className=" text-white font-medium text-md py-3">
              {para.text}
            </p>
          ))}
        </div>
        <div className=" w-full">
          <h1 className=" text-white font-medium text-xl">Support</h1>

          {Solution.map((para, index) => (
            <p key={index} className=" text-white font-medium text-md py-3">
              {para.text}
            </p>
          ))}
        </div>
        <div className=" flex flex-col">
          <h1 className=" text-white font-medium text-xl">Subscribe</h1>
          <p className=" text-white font-medium text-md py-3">
            Subscribe to our newsletter for the latest updates
          </p>
          <div>
            <form className=" flex items-center h-[70px] w-full my-3">
              <input
                type="email"
                placeholder="Email address"
                className="  rounded-l-lg text-black font-medium placeholder:text-zinc-700 h-[60px] outline-none border-[2px] px-2 w-[300px]"
              />
              <button
                type="submit"
                className=" bg-slate-800 flex rounded-r-lg justify-center items-center h-[60px] px-3"
              >
                <AiOutlineMail className=" text-white text-4xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
   </Fade>
  );
}

export default Footer;
