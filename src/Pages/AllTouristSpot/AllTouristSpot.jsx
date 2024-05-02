import { useLoaderData } from "react-router-dom";
import TouristSpotB from "./TouristSpotB/TouristSpotB";
import Banner from "../Shared/Banner/Banner";
import bannerImg from "../../assets/banner-img.jpg";
import { useState } from "react";
import { MdFileUpload, MdOutlineSortByAlpha } from "react-icons/md";
import { ImDownload2, ImUpload, ImUpload2 } from "react-icons/im";
import { IoIosStarHalf } from "react-icons/io";
import { FaSortAlphaDown } from "react-icons/fa";

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);
  console.log(touristSpots.slice());
  const [sortedSpots, setSortedSpots] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  // Sort the array based on the "touristsSpotName" property
  const handleSortSpotByName = () => {
    const sortedTouristSpots = touristSpots.sort((a, b) => {
      const nameA = a.touristsSpotName.toUpperCase();
      const nameB = b.touristsSpotName.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    return sortedTouristSpots;
  };

  return (
    <section className="">
      <Banner bannerTitle={`Tour Search`} bannerImg={bannerImg} />
      {/* Sort tourist spots Section */}
      <div className="bg-[#f8f8f8]">
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
            onClick={() => handleItemClick("lowToHigh")}
            className={`${
              activeItem === "lowToHigh" ? "bg-white border-none" : ""
            }`}
          >
            {/* <ImUpload /> */}
            <ImUpload2 />
            Price low to high
          </li>
          <li
            onClick={() => handleItemClick("highToLow")}
            className={`${
              activeItem === "highToLow" ? "bg-white border-none" : ""
            }`}
          >
            <ImDownload2 />
            Price high to low
          </li>
          <li
            onClick={() => handleItemClick("rating")}
            className={`${
              activeItem === "rating" ? "bg-white border-none" : ""
            }`}
          >
            <IoIosStarHalf />
            Rating
          </li>
        </ul>
      </div>
      <section className="grid gap-6 max-w-[1280px] mx-auto px-5 lg:px-0 my-24 lg:grid-cols-4">
        <div className="flex flex-col gap-10 lg:col-span-3">
          {touristSpots &&
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
