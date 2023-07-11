import React, { useState } from "react";
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia";
import { Accordions } from "../Datas/Data1";
import { Fade, Zoom } from "react-awesome-reveal";

function Accordion({ title, active, handleChange }) {
  const {
    heading1,
    heading2,
    // paragraph,
    // title1,
    // title2,
    // title3,
    // title4,
    content,
  } = Accordions;
  return (
    <>
      <section className="mt-10 mb-10 w-full lg:px-20  mx-auto ">
        <div className=" w-[100%] mx-auto h-auto">
          <div
            onClick={handleChange}
            className={`flex items-center ${
              active ? "bg-blue-600 duration-300" : " bg-slate-300 hover:bg-slate-400"
            } rounded-t-md  justify-between  shadow-xl mx-auto sm:w-[60%]  lg:w-[100%]  md:w-[80%] w-[100%] py-2 cursor-pointer px-3 `}
          >
            <h1 className={`text-md font-medium ${active ? "text-white" : ""}`}>
              {title}
            </h1>
            {active ? (
              <LiaAngleUpSolid className="text-xl font-semibold text-white" />
            ) : (
              <LiaAngleDownSolid className="text-xl font-semibold " />
            )}
          </div>

          {active && (
        
                <div
              className={`h-[200px] lg:w-[100%] md:w-[80%] font-medium sm:w-[60%] mx-auto w-[100%] transition-all duration-300 py-5 bg-slate-400 rounded-b-xl px-5`}
            >
              <h1>{content}</h1>
            </div>
          
          )}
        </div>
      </section>
    </>
  );
}

function Styler() {
  const [activeAccordion, setActiveAccordion] = useState("");

  const handleChangeAccordion = (title) => {
    setActiveAccordion((prevTitle) => (prevTitle === title ? "" : title));
  };
  const {
    heading1,
    heading2,
    paragraph,
    title1,
    title2,
    title3,
    title4,
    content,
  } = Accordions;

  return (
    <section className=" w-[100%] h-[auto] mx-auto px-5  py-4">
     <Zoom cascade>
     <h1 className=" text-sky-500 font-medium text-2xl text-center py-3">
        {heading1}
      </h1>
      <h1 className=" text-[#24126A] dark:text-white font-semibold text-4xl lg:text-5xl text-center pb-3">
        {heading2}
      </h1>
      <p className=" text-black dark:text-white font-medium text-md text-center w-[90%]  lg:w-[40%] mx-auto pb-6">
        {paragraph}
      </p>
     </Zoom>
     <Zoom cascade>
      <section className=" grid grid-cols-1 lg:grid-cols-2 w-full">
        <Accordion
          title={title1}
          active={activeAccordion === "Title1"}
          handleChange={() => handleChangeAccordion("Title1")}
        />
        <Accordion
          title={title2}
          active={activeAccordion === "Title2"}
          handleChange={() => handleChangeAccordion("Title2")}
        />
      </section>
      </Zoom>
    </section>
  );
}

export default Styler;
