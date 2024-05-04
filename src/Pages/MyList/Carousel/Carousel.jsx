import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef } from "react";
import sliderImg1 from "../../../assets/sliderImg/slider-1.jpg";
import sliderImg2 from "../../../assets/sliderImg/slider-2.jpg";
import sliderImg3 from "../../../assets/sliderImg/slider-3.jpg";

import Slide from "./Slide/Slide";
const Carousel = () => {
  const sliderRef = useRef(null);
  //   console.log(sliderRef);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <>
      <section className="relative">
        <div className="absolute z-10 flex justify-between w-full px-5 lg:px-10 top-1/2">
          <div
            onClick={prevSlide}
            className="p-3 md:p-5 bg-white rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-75 ease-in"
          >
            <GrPrevious className="text-xl font-semibold md:text-2xl text-primary" />
          </div>
          <div
            onClick={nextSlide}
            className="p-3 md:p-5 bg-white rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-75 ease-in"
          >
            <GrNext className="text-xl font-semibold md:text-2xl text-primary" />
          </div>
        </div>

        <section className="">
          <Slider ref={sliderRef} {...settings} className="">
            <Slide
              slideImg={sliderImg1}
              title={"Explore Exotic Destinations"}
              description={`Dive into adventure with our curated travel packages. From Fiji's beaches to Machu Picchu's wonders, your dream getaway awaits`}
            />
            <Slide
              slideImg={sliderImg2}
              title={`Adventure Awaits`}
              description={`Satisfy your wanderlust with our tailor-made experiences. From mountain treks to island retreats, let's craft your perfect journey!`}
            />
            <Slide
              slideImg={sliderImg3}
              title={`Rejuvenate Your Soul`}
              description={`Discover tranquility in our serene escapes. From luxury spas to secluded hideaways, find your slice of paradise and unwind.`}
            />
            {/* <CarouselSlide />
            <CarouselSlide /> */}
          </Slider>
        </section>
      </section>
    </>
  );
};

export default Carousel;
