import PropTypes from "prop-types";
import { useState } from "react";
import { ImDownload2, ImUpload2 } from "react-icons/im";
import { IoIosStarHalf } from "react-icons/io";
import { FaSortAlphaDown } from "react-icons/fa";

const Sort = ({ touristSpots, setSortedTouristSpots }) => {
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
    setSortedTouristSpots(sortedTouristSpots);
    // return sortedTouristSpots;
  };
  const handleSortByPriceLowToHigh = () => {
    const sortedTouristSpots = touristSpots.sort((a, b) => a.cost - b.cost);
    setSortedTouristSpots(sortedTouristSpots);
  };
  const handleSortByPriceHighToLow = () => {
    const sortedTouristSpots = touristSpots.sort((a, b) => b.cost - a.cost);
    setSortedTouristSpots(sortedTouristSpots);
  };
  const handleSortByRating = () => {
    const sortedTouristSpots = touristSpots.sort((a, b) => b.rating - a.rating);
    setSortedTouristSpots(sortedTouristSpots);
  };
  return (
    <>
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
    </>
  );
};

export default Sort;
Sort.propTypes = {
  touristSpots: PropTypes.array.isRequired,
};
