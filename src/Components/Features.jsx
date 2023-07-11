import React from "react";
import { Zoom } from "react-awesome-reveal";
import FeatureImage1 from "../assets/feature.webp";
import FeatureImage2 from "../assets/feature2.webp";
import FeatureImage3 from "../assets/feature1.webp";
import { FeatureData } from "../Datas/Data1";

function Features() {
  const FeatureCard = [
    { img: FeatureImage3, heading: "Instant Exchage" },
    { img: FeatureImage2, heading: "Safe & Secure" },
    { img: FeatureImage1, heading: "Instant Trading", margin: true },
  ];
  const zoomOptions = {
    delay: 0, // Set the delay to 0 to remove the default delay
    duration: 500, // Set the duration to adjust the speed of the animation
  };
  const { heading1, heading2, paragraph1, paragraph2 } = FeatureData;
  return (
    <section className=" bg-white dark:bg-slate-800 py-20">
      <Zoom {...zoomOptions} cascade>
        <h1 className=" text-sky-500 font-medium text-2xl text-center py-3">
          {heading1}
        </h1>
        <h1 className=" text-[#24126A] dark:text-white font-semibold text-5xl text-center pb-3">
          {heading2}
        </h1>
        <p className=" text-black dark:text-white font-medium text-md text-center w-[90%]  lg:w-[40%] mx-auto pb-6">
          {paragraph1}
        </p>
      </Zoom>
      <Zoom {...zoomOptions}>
        <section className="bg-white dark:bg-slate-800 duration-300 pt-5 lg:pt-20 w-full h-auto grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 place-items-center px-5 lg:px-20 py-10">
          {FeatureCard.map((cards, index) => (
            <div
              key={index}
              className={` flex items-center flex-col py-10  gap-3 hover:drop-shadow-2xl dark:hover:shadow-slate-600 transition-all
             hover:border-t-4 hover:border-b-4 border-sky-500 bg-zinc-100 dark:bg-slate-700
              shadow-2xl w-[97%] h-[400px] sm:w-[80%] md:w-[100%] lg:w-[100%] ${
                cards.margin && "md:ml-[110%] lg:m-0"
              } rounded-lg text-black dark:text-white`}
            >
              <img src={cards.img} alt="Feature_image1.jpg" />
              <h1 className=" text-sky-700 dark:text-sky-400 font-semibold text-2xl">
                {cards.heading}
              </h1>
              <p className=" text-black dark:text-white font-medium text-md text-center px-10">
                {paragraph2}
              </p>
            </div>
          ))}
        </section>
      </Zoom>
    </section>
  );
}

export default Features;
