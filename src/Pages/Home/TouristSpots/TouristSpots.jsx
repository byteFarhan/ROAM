import { useState } from "react";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import { useEffect } from "react";
import TouristSpot from "../../Shared/TouristSpot/TouristSpot";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourist_spots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  console.log(touristSpots);
  return (
    <section
      id="tourist-spot"
      className="py-20 lg:py-24 bg-gray dark:bg-[#202124] px-5 lg:px-0"
    >
      <div className="max-w-[1280px] mx-auto">
        <SectionIntro
          subTitle={`Modern & Beautiful`}
          title={`Our Most Popular Adventures`}
          description={`Discover breathtaking destinations with our expertly curated tours. Book now and embark on your next unforgettable adventure with us!`}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {touristSpots &&
            touristSpots?.map((touristSpot) => (
              <TouristSpot key={touristSpot._id} touristSpot={touristSpot} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TouristSpots;
