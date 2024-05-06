import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  const { countryName, image, extraInfo } = country;
  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      to={`countries/${countryName.toLowerCase()}`}
    >
      <div className="overflow-hidden cursor-pointer">
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="h-[60vh] bg-no-repeat bg-center bg-cover transition-transform duration-300 delay-300 hover:scale-105 ease-in-out"
        >
          {/* <div>
        <img src={image} alt={countryName} className="object-cover size-full" />
      </div> */}
          {/* <div className="relative flex justify-center "> */}
          <div className="size-full flex justify-center items-center bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)]">
            <div className="space-y-3 text-center ">
              <h3 className="text-2xl font-bold text-white">{countryName}</h3>
              <h5 className="text-xl italic font-bold text-white font-playfair-display">
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
