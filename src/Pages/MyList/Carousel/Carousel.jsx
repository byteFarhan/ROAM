import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef } from "react";
import sliderImg1 from "../../../assets/sliderImg/slider-1.jpg";
import sliderImg2 from "../../../assets/sliderImg/slider-2.jpg";
import sliderImg3 from "../../../assets/sliderImg/slider-3.jpg";

import Slide from "./Slide/Slide";
const Carousel = ({ mySpots }) => {
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
          {mySpots?.length >= 2 ? (
            <>
              <Slider ref={sliderRef} {...settings} className="">
                {mySpots?.map((spot) => (
                  <Slide
                    key={spot._id}
                    slideImg={spot.image}
                    title={spot.touristsSpotName}
                  />
                ))}
              </Slider>
            </>
          ) : (
            <>
              <Slider ref={sliderRef} {...settings} className="">
                <Slide
                  slideImg={sliderImg1}
                  title={"Explore Exotic Destinations"}
                />
                <Slide slideImg={sliderImg2} title={`Adventure Awaits`} />
                <Slide slideImg={sliderImg3} title={`Rejuvenate Your Soul`} />
              </Slider>
            </>
          )}
          {/* <Slider ref={sliderRef} {...settings} className="">
            <Slide
              slideImg={sliderImg1}
              title={"Explore Exotic Destinations"}
            />
            <Slide slideImg={sliderImg2} title={`Adventure Awaits`} />
            <Slide slideImg={sliderImg3} title={`Rejuvenate Your Soul`} />
          </Slider> */}
        </section>
      </section>
    </>
  );
};

export default Carousel;
Carousel.propTypes = {
  mySpots: PropTypes.array,
};
