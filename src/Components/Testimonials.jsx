import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { Testimonialdata } from "../Datas/Data1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const slideOptions = {
    delay: 0,
    duration: 500,
    transition: "all",
  };
  const {
    heading1,
    heading2,
    paragraph,
    image1,
    image2,
    image3,
    Circleimage,
    Testimonials,
  } = Testimonialdata;

  const Cards = [
    {
      Quotes: Testimonials,
      image: image1,
      name: "David  Warner",
      skills: "Web Developer",
    },
    {
      Quotes: Testimonials,
      image: image2,
      name: " Somalia D Silva",
      skills: "Blockchain Developer",
    },
    {
      Quotes: Testimonials,
      image: image3,
      name: "Jems Gilario",
      skills: "Graphics Designer",
    },
    {
      Quotes: Testimonials,
      image: image2,
      name: " Somalia D Silva",
      skills: "Blockchain Developer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    speed: 600,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
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
    <section className=" bg-slate-100 dark:bg-slate-800 h-auto py-32">
      <Slide cascade {...slideOptions}>
        <h1 className=" text-sky-500 dark:text-white font-medium text-2xl text-center py-3">
          {heading1}
        </h1>
        <h1 className=" text-[#24126A] dark:text-white font-semibold text-4xl lg:text-5xl text-center pb-3">
          {heading2}
        </h1>
        <p className=" text-black dark:text-white font-medium text-md text-center w-[90%]  lg:w-[40%] mx-auto pb-6">
          {paragraph}
        </p>
      </Slide>
      <Zoom>
      <section className=" lg:w-[40%] w-[85%] sm:w-[80%] md:w-[70%] h-auto  dark:bg-slate-900  hover:drop-shadow-2xl rounded-xl shadow-2xl   mx-auto">   
        <Slider {...settings}>
          {Cards.map((card, index) => (
            <div
              key={index}
              className=" bg-white relative dark:bg-slate-700 flex flex-col justify-between rounded-xl shadow-xl w-[50%] h-[300px] py-5 px-5"
            >
              <p className=" text-black dark:text-white font-medium text-md w-[80%]">
                “A vast number of clients decide to create dedicated software is
                the online store. It is nothing but a website with a catalog of
                products and the possibility.”
              </p>
              <div className=" flex gap-10 items-center mt-5">
                <img
                  src={card.image}
                  alt="testimonial_image.jpg"
                  className=" rounded-full h-[65px] w-[65px] object-cover"
                />
                <div className=" flex flex-col gap-3">
                  <h1 className=" text-sky-800 dark:text-sky-500 font-medium text-xl">
                    {card.name}
                  </h1>
                  <p className=" font-medium text-md text-black dark:text-white">
                    {card.skills}
                  </p>
                </div>
              </div>
              <img
                src={Circleimage}
                alt=""
                className=" absolute w-[50px] h-[50px] rounded-full top-0 right-0"
              />
            </div>
          ))}
        </Slider>
      </section>
      </Zoom>
    </section>
  );
}

export default Testimonials;
