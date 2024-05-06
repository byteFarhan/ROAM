import { useState } from "react";
import SectionIntro from "../../Shared/SectionIntro/SectionIntro";
import { useEffect } from "react";
import TouristSpot from "../../Shared/TouristSpot/TouristSpot";
import { Link } from "react-router-dom";

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
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          subTitle={`Modern & Beautiful`}
          title={`Our Most Popular Adventures`}
          description={`Discover breathtaking destinations with our expertly curated tours. Book now and embark on your next unforgettable adventure with us!`}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {touristSpots?.length > 0 &&
            touristSpots
              ?.slice(0, 6)
              .map((touristSpot, index) => (
                <TouristSpot
                  key={touristSpot._id}
                  touristSpot={touristSpot}
                  index={index}
                />
              ))}
        </div>
      </div>
      <div className="mt-8 text-center lg:mt-10">
        <Link to={`/all_spots`} onClick={() => scrollTo(0, 0)}>
          <button className="btn-base bg-title">View All Spots</button>
        </Link>
      </div>
    </section>
  );
};

export default TouristSpots;
