import PropTypes from "prop-types";
// import { Fade } from "react-awesome-reveal";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
const TouristSpot = ({ touristSpot, index }) => {
  const {
    image,
    touristsSpotName,
    description,
    cost,
    travelTime,
    age,
    rating,
    _id,
  } = touristSpot;
  return (
    <>
      <div className="flex flex-col bg-white dark:bg-natural">
        <Link to={`/tourist_spots/${_id}`}>
          <figure className="overflow-hidden">
            <img
              src={image}
              alt={touristsSpotName}
              className="h-[450px] lg:h-[500px] w-auto object-cover transition-transform duration-300 delay-300 ease-in-out hover:scale-110"
            />
          </figure>
        </Link>
        <div className="flex-grow">
          <div className="p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-2xl font-bold transition-all duration-100 text-title dark:text-title-d hover:text-primary">
                <Link to={`/tourist_spots/${_id}`}>{touristsSpotName}</Link>
              </h3>
              <h5 className="text-xl font-bold text-primary">${cost}</h5>
            </div>
            <p className="mt-1 text-natural dark:text-natural-d">
              {rating} Superb
            </p>
            <p className="mt-6 text-natural dark:text-natural-d">
              {description?.substring(0, 70 - 3) + "..."}
            </p>
          </div>
        </div>

        <div className="flex gap-6 lg:gap-10 px-6 py-4 font-medium *:text-white bg-primary">
          <p className="flex items-center gap-2">
            <MdOutlineAccessTime />
            {travelTime}
          </p>
          <p className="flex items-center gap-2">
            <BsFillPersonVcardFill />
            {age}+
          </p>
          <Link to={`/tourist_spots/${_id}`}>
            <button className="font-bold">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TouristSpot;
TouristSpot.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};
