import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { countryName, image, extraInfo } = country;
  return (
    <Link to={`countries/${countryName.toLowerCase()}`}>
      <div className="overflow-hidden cursor-pointer">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-[60vh] bg-no-repeat bg-center bg-cover transition-transform duration-300 delay-300 hover:scale-105 ease-in-out"
        >
          {/* <div>
        <img src={image} alt={countryName} className="size-full object-cover" />
      </div> */}
          {/* <div className="relative flex justify-center "> */}
          <div className="size-full flex justify-center items-center bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)]">
            <div className="space-y-3 text-center ">
              <h3 className="text-white font-bold text-2xl">{countryName}</h3>
              <h5 className="text-white font-bold italic text-xl font-playfair-display">
                {extraInfo}
              </h5>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Link>
  );
};

export default Country;
Country.propTypes = {
  country: PropTypes.object.isRequired,
};