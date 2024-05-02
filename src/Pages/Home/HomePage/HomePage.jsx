import Carousel from "../Carousel/Carousel";
import DiscountSection from "../DiscountSection/DiscountSection";
import TouristSpots from "../TouristSpots/TouristSpots";

const HomePage = () => {
  return (
    <section>
      <Carousel />
      <TouristSpots />
      <DiscountSection />
    </section>
  );
};

export default HomePage;
