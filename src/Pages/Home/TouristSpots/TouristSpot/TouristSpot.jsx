import PropTypes from "prop-types";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
const TouristSpot = ({ touristSpot }) => {
  const {
    image,
    tourists_spot_name,
    description,
    average_cost,
    travel_time,
    age,
    rating,
    _id,
  } = touristSpot;
  return (
    <div className="flex flex-col bg-white">
      <Link to={`/tourist_spots/${_id}`}>
        <figure>
          <img
            src={image}
            alt={tourists_spot_name}
            className="h-[550px] w-auto object-cover"
          />
        </figure>
      </Link>
      <div className="flex-grow">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold transition-all duration-100 text-title hover:text-primary">
              <Link to={`/tourist_spots/${_id}`}>{tourists_spot_name}</Link>
            </h3>
            <h5 className="text-xl font-bold text-primary">{average_cost}</h5>
          </div>
          <p className="mt-1 text-natural">{rating} Superb</p>
          <p className="mt-6 text-natural">
            {description?.substring(0, 70 - 3) + "..."}
          </p>
        </div>
      </div>

      <div className="flex gap-10 px-6 py-4 font-medium text-white bg-primary">
        <p className="flex items-center gap-2">
          <MdOutlineAccessTime />
          {travel_time}
        </p>
        <p className="flex items-center gap-2">
          <BsFillPersonVcardFill />
          {age}+
        </p>
      </div>
    </div>
  );
};

export default TouristSpot;
TouristSpot.propTypes = {
  touristSpot: PropTypes.object.isRequired,
};
