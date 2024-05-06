import { Helmet } from "react-helmet-async";
import Carousel from "../Carousel/Carousel";
import DiscountSection from "../DiscountSection/DiscountSection";
import TouristSpots from "../TouristSpots/TouristSpots";

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
      <Testimonial />
    </section>
  );
};

export default HomePage;
