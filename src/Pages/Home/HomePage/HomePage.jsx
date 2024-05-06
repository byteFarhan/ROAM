import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";
import DiscountSection from "../DiscountSection/DiscountSection";
import TouristSpots from "../TouristSpots/TouristSpots";
import Countries from "../Countries/Countries";
import Testimonial from "../Testimonial/Testimonial";

const HomePage = () => {
  return (
    <section>
      <Helmet>
        <title>ROAM | Home</title>
      </Helmet>
      <Carousel />
      <TouristSpots />
      <DiscountSection />
      <Countries />
      <Testimonial />
    </section>
  );
};

export default HomePage;
