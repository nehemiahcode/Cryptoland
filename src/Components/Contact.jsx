import React from "react";
import { Fade } from "react-awesome-reveal";
import Circleimage from "../assets/circle.svg";
import { Link } from "react-router-dom";
import { LiaAngleRightSolid } from "react-icons/lia";

function Contact() {
  const Input = [1, 2];
  const Inputs = [
    { type: "text", placeholder: "Name*" },
    { type: "email", placeholder: "Email*" },
  ];
  const Inputs2 = [
    { type: "text", placeholder: "Subject*" },
    { type: "tel", placeholder: "Phone*" },
  ];
  return (
    <>
      <Fade direction="down">
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
            <h1 className=" font-semibold text-4xl">Contact</h1>
            <div className=" flex items-center gap-2 mt-3">
              <h1 className="text-gray-200 hover:text-sky-500 text-xl font-medium">
                <Link to={"/blog"}>Home</Link>
              </h1>
              <LiaAngleRightSolid className=" text-white text-xl" />
              <h1 className="text-gray-400 text-xl font-medium">Contact</h1>
            </div>
          </div>
        </section>
      </Fade>

      <section className=" lg:px-20 w-full h-auto grid grid-cols-1 lg:grid-cols-2 bg-slate-200 dark:bg-slate-800">
        <div className=" px-6">
          <div className=" my-5">
            <h1 className=" text-slate-800 dark:text-white  font-semibold text-4xl">
              Contact Us
            </h1>
            <p className=" text-black dark:text-white  font-medium text-md w-[60%]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
          </div>

          <div className=" mb-5">
            <h1 className=" text-slate-800 dark:text-white font-semibold text-2xl">
              Call us
            </h1>
            <p className=" text-black dark:text-white  font-medium text-md">
              +14-394-409-591
            </p>
          </div>
          <div className=" mb-5">
            <h1 className=" text-slate-800 dark:text-white  font-semibold py-2 text-2xl">
              Email Us
            </h1>
            <h1 className=" font-medium text-md dark:text-white  text-black">
              info@mail.com
            </h1>
            <p className=" text-black dark:text-white  font-medium text-md">
              support@mail.com
            </p>
          </div>
          <div className=" mb-5">
            <h1 className=" text-slate-800 dark:text-white  font-semibold text-2xl">
              Our Address
            </h1>
            <p className=" text-black dark:text-white  font-medium text-md">
              34 Madison Street, NY, USA 10005
            </p>
          </div>
        </div>

        <div className=" pb-10">
          <form>
            <h1 className=" text-slate-800 dark:text-white font-medium text-3xl lg:px-5 px-6 py-4">
              Leave a message here
            </h1>

            <div className=" flex justify-between flex-col lg:flex-row items-center sm:items-start sm:mx-5 gap-5 w-full mb-3">
              {Inputs.map((inputs, index) => (
                <input
                required={true}
                  key={index}
                  type={inputs.type}
                  placeholder={inputs.placeholder}
                  className=" bg-white dark:bg-slate-300 dark:placeholder:text-zinc-800 placeholder:font-medium
                   border-[2px] outline-none w-[90%] sm:w-[60%] md:w-[50%]  lg:w-[80%] rounded-md text-black py-3 px-3"
                />
              ))}
            </div>
            <div className=" flex justify-between flex-col lg:flex-row items-center sm:items-start sm:mx-5 gap-5 w-full mb-3">
              {Inputs2.map((inputs, index) => (
                <input
                required={true}
                  key={index}
                  type={inputs.type}
                  placeholder={inputs.placeholder}
                  className=" bg-white dark:bg-slate-300 dark:placeholder:text-zinc-800 placeholder:font-medium
                   border-[2px] outline-none  w-[90%] sm:w-[60%] md:w-[50%] lg:w-[80%] rounded-md text-black py-3 px-3"
                />
              ))}
            </div>
            <div className=" w-full flex flex-col items-center md:items-start lg:items-center sm:mx-5 ">
              <textarea
              required={true}
                name=""
                placeholder="Message*"
                className=" lg:w-[100%] sm:w-[64%] md:w-[53%] dark:placeholder:text-zinc-800
                 placeholder:font-medium sm:m-0 mx-auto  w-[90%] dark:bg-slate-300
                  h-[160px] resize-none px-4 py-4 outline-none border-[2px] rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" bg-blue-500 rounded-full px-7 ml-6 text-white font-medium text-lg py-3 my-4 w-[auto] "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
