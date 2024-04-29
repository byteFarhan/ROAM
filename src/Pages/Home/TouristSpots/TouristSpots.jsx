import { useState } from "react";
import SectionIntro from "../../Shared/Navbar/SectionIntro/SectionIntro";
import { useEffect } from "react";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourist_spots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);
  console.log(touristSpots);
  return (
    <section id="tourist-spot" className="my-20 lg:my-24">
      <SectionIntro
        subTitle={`Modern & Beautiful`}
        title={`Our Most Popular Adventures`}
        description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere tempor mauris, nec imperdiet mi rutrum eget. Donec quis ligula in tellus dictum consequat.`}
      />
      <div></div>
    </section>
  );
};

export default TouristSpots;
