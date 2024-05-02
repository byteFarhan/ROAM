import PropTypes from "prop-types";

const Banner = ({ bannerTitle, bannerImg }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImg})` }}
      className="bg-center bg-no-repeat bg-cover h-[70vh] lg:h-[80vh]"
    >
      <div className="flex items-center mx-auto size-full max-w-7xl">
        {/* <div className="absolute top-0 left-0 size-full bg-gradient-to-r from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.1)] bg-blend-overlay"> */}
        <h1 className="w-full text-4xl font-bold text-center text-white lg:text-left md:text-6xl lg:text-9xl">
          {bannerTitle}_
        </h1>
      </div>
    </section>
  );
};

export default Banner;
Banner.propTypes = {
  bannerTitle: PropTypes.string,
  bannerImg: PropTypes.string,
};
