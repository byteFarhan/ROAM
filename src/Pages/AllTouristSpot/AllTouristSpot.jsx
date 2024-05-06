import { useLoaderData } from "react-router-dom";
import TouristSpotB from "./TouristSpotB/TouristSpotB";
import Banner from "../Shared/Banner/Banner";
import bannerImg from "../../assets/banner-img.jpg";
import { useState } from "react";
import { ImDownload2, ImUpload2 } from "react-icons/im";
import { IoIosStarHalf } from "react-icons/io";
import { FaSortAlphaDown } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useSort from "../../hooks/useSort";
import { Fade } from "react-awesome-reveal";

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  const {
    handleSortSpotByName,
    handleSortByPriceLowToHigh,
    handleSortByPriceHighToLow,
    handleSortByRating,
  } = useSort(touristSpots.length ? touristSpots : []);

  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="">
      <Helmet>
        <title>ROAM | All Spots</title>
      </Helmet>
      <Banner bannerTitle={`Tour Search`} bannerImg={bannerImg} />
      {/* Sort tourist spots Section */}
      <section className="bg-[#f8f8f8]">
        <ul
          className="flex flex-col md:flex-row items-center *:text-natural *:lg:text-lg *:font-medium *:lg:font-semibold
         justify-between *:py-6 mx-auto *:text-center max-w-7xl *:border-r *:border-base-300 *:flex *:justify-center *:items-center *:gap-2 *:w-full hover:*:text-primary *:cursor-pointer *:transition-colors *:delay-75 *:duration-75 *:ease-in-out"
        >
          <li
            onClick={() => {
              handleItemClick("name");
              handleSortSpotByName();
            }}
            className={`${activeItem === "name" ? "bg-white border-none" : ""}`}
          >
            <FaSortAlphaDown />
            Name
          </li>
          <li
            onClick={() => {
              handleItemClick("lowToHigh");
              handleSortByPriceLowToHigh();
            }}
            className={`${
              activeItem === "lowToHigh" ? "bg-white border-none" : ""
            }`}
          >
            {/* <ImUpload /> */}
            <ImUpload2 />
            Price low to high
          </li>
          <li
            onClick={() => {
              handleItemClick("highToLow");
              handleSortByPriceHighToLow();
            }}
            className={`${
              activeItem === "highToLow" ? "bg-white border-none" : ""
            }`}
          >
            <ImDownload2 />
            Price high to low
          </li>
          <li
            onClick={() => {
              handleItemClick("rating");
              handleSortByRating();
            }}
            className={`${
              activeItem === "rating" ? "bg-white border-none" : ""
            }`}
          >
            <IoIosStarHalf />
            Rating
          </li>
        </ul>
      </section>
      <section className="grid gap-6 max-w-[1280px] mx-auto px-5 lg:px-0 my-24 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="space-y-10">
            <Fade cascade damping={0.1} triggerOnce={true}>
              {touristSpots?.length > 0 &&
                touristSpots?.map((spot) => (
                  <TouristSpotB key={spot._id} theSpot={spot} />
                ))}
            </Fade>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="lg:h-[80vh]  border-title border-2 "></div>
        </div>
      </section>
    </section>
  );
};

export default AllTouristSpot;
