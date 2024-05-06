import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import TestimonialItem from "./TestimonialItem/TestimonialItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/testimonial/")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  const sliderRef = useRef(null);
  //   console.log(sliderRef);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     // infinite: true,
      //     // dots: true,
      //   },
      // },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };
  const nextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <section className="pb-16 lg:pb-24 dark:bg-[#202124]">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          title={`Unforgettable Adventures Await`}
          subTitle={`Explore More`}
          description={`Embark on epic journeys with our travel agency. Discover breathtaking destinations, experience local cultures, and create lasting memories. Let us turn your dreams into extraordinary adventures.`}
        />
        <div className="relative">
          <div className="absolute z-10 flex justify-between w-full px-5 top-1/2 lg:px-0">
            <div
              onClick={prevSlide}
              className="p-3 md:p-5 bg-title rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-300 ease-in-out mr-5"
            >
              <FaArrowLeft className="text-xl text-white md:text-2xl" />
            </div>
            <div
              onClick={nextSlide}
              className="p-3 md:p-5 bg-title rounded-full cursor-pointer hover:bg-primary *:hover:text-white transition-all duration-300 ease-in-out ml-5"
            >
              <FaArrowRight className="text-xl text-white md:text-2xl" />
            </div>
          </div>

          <div className="mx-0 lg:mx-8">
            <Slider ref={sliderRef} {...settings} className="">
              {reviews?.length > 0 &&
                reviews?.map((review) => (
                  <TestimonialItem key={review._id} review={review} />
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
