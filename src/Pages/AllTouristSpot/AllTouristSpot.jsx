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

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  const {
    handleSortSpotByName,
    handleSortByPriceLowToHigh,
    handleSortByPriceHighToLow,
    handleSortByRating,
  } = useSort(touristSpots.length ? touristSpots : []);
  console.log(handleSortByRating);
  // console.log(touristSpots);
  // console.log(touristSpots.slice());
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  // // Sort the array based on the "touristsSpotName" property
  // const handleSortSpotByName = () => {
  //   const sortedTouristSpots = touristSpots.sort((a, b) => {
  //     const nameA = a.touristsSpotName.toUpperCase();
  //     const nameB = b.touristsSpotName.toUpperCase();

  //     if (nameA < nameB) {
  //       return -1;
  //     }
  //     if (nameA > nameB) {
  //       return 1;
  //     }

  //     // names must be equal
  //     return 0;
  //   });
  //   return sortedTouristSpots;
  // };
  // // Sort the array based on the "cost low to high"
  // const handleSortByPriceLowToHigh = () => {
  //   return touristSpots.sort((a, b) => a.cost - b.cost);
  // };
  // // Sort the array based on the "cost high to low"
  // const handleSortByPriceHighToLow = () => {
  //   return touristSpots.sort((a, b) => b.cost - a.cost);
  // };
  // // Sort the array based on the "rating"
  // const handleSortByRating = () => {
  //   return touristSpots.sort((a, b) => b.rating - a.rating);
  // };

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
        <div className="flex flex-col gap-10 lg:col-span-3">
          {touristSpots?.length &&
            touristSpots?.map((spot) => (
              <TouristSpotB key={spot._id} theSpot={spot} />
            ))}
        </div>
        <div className="lg:col-span-1">
          <div className="lg:h-[80vh]  border-title border-2 "></div>
        </div>
      </section>
    </section>
  );
};

export default AllTouristSpot;
