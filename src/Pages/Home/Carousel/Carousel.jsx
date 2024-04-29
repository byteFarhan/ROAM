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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    // speed: 2000,
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
            className="p-3 md:p-5 bg-white rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-75"
          >
            <GrPrevious className="text-xl md:text-2xl font-semibold text-primary" />
          </div>
          <div
            onClick={nextSlide}
            className="p-3 md:p-5 bg-white rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-75"
          >
            <GrNext className="text-xl md:text-2xl font-semibold text-primary" />
          </div>
        </div>

        <div className="">
          <Slider ref={sliderRef} {...settings} className="">
            <Slide
              slideImg={sliderImg1}
              title={"Explore Exotic Destinations"}
              description={`Dive into adventure with our curated travel packages. From Fiji's beaches to Machu Picchu's wonders, your dream getaway awaits`}
            />
            <Slide
              slideImg={sliderImg2}
              title={`Seaside Retreat Haven`}
              subTitle={`Experience Serenity by the Shore`}
              description={`Discover the ultimate seaside sanctuary at our retreat haven. Let the soothing sound of waves and the gentle ocean breeze whisk away your worries.`}
            />
            <Slide
              slideImg={sliderImg3}
              title={`Mountain Chalet Escape`}
              subTitle={`Embrace Adventure in Nature's Lap`}
              description={`Embark on a journey to our mountain chalet escape, where adventure and relaxation intertwine. Surrounded by breathtaking views, every moment becomes an exhilarating experience.`}
            />
            {/* <CarouselSlide />
            <CarouselSlide /> */}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Carousel;