import PropTypes from "prop-types";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
const TouristSpotB = ({ theSpot }) => {
  const {
    image,
    touristsSpotName,
    description,
    cost,
    travelTime,
    age,
    rating,
    _id,
  } = theSpot;
  return (
    <div className="flex gap-5 bg-white">
      <div className="w-2/5">
        <Link
          to={`/spots/${_id}`}
          onClick={() => scrollTo(0, 0)}
          className="h-full"
        >
          {/* <figure className="h-full"> */}
          <img
            src={image}
            alt={touristsSpotName}
            className="object-cover w-full h-full"
          />
          {/* </figure> */}
        </Link>
      </div>

      <div className="w-3/5">
        <div className="">
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold transition-all duration-100 text-title hover:text-primary">
              <Link to={`/spots/${_id}`} onClick={() => scrollTo(0, 0)}>
                {touristsSpotName}
              </Link>
            </h3>
            <h4 className="text-xl font-bold text-primary">
              ${cost}{" "}
              <span className="text-base font-normal text-natural">
                / per person
              </span>
            </h4>
            {/* <h5 className="text-xl font-bold text-primary">${cost}</h5> */}
          </div>
          <p className="mt-1 text-natural">{rating} Superb</p>
          <hr className="h-[1px] bg-[#ebebeb] border-none mt-2 w-full" />

          <p className="my-5 text-natural">
            {description?.substring(0, 250 - 3) + "..."}
          </p>
        </div>
        {/* <hr className="h-[1px] bg-[#ebebeb] border-none my-5 w-full" />
        <h4 className="my-5 text-xl font-bold text-primary">
          ${cost}{" "}
          <span className="text-base font-normal text-natural">
            / per person
          </span>
        </h4> */}
        <div className="flex gap-10 px-6 py-4 font-medium *:text-white bg-primary">
          <p className="flex items-center gap-2">
            <MdOutlineAccessTime />
            {travelTime}
          </p>
          <p className="flex items-center gap-2">
            <BsFillPersonVcardFill />
            {age}+
          </p>
          <Link to={`/spots/${_id}`} onClick={() => scrollTo(0, 0)}>
            <button className="font-bold">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TouristSpotB;
TouristSpotB.propTypes = {
  theSpot: PropTypes.object.isRequired,
};
