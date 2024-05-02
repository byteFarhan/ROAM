import { useLoaderData } from "react-router-dom";
import TouristSpotB from "./TouristSpotB/TouristSpotB";
import Banner from "../Shared/Banner/Banner";
import bannerImg from "../../assets/banner-img.jpg";

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);

  return (
    <section className="">
      <Banner bannerTitle={`Tour Search`} bannerImg={bannerImg} />
      <div>
        <h3 className="my-12 text-3xl font-bold text-center capitalize text-primary">
          Sort functonallity will implement here
        </h3>
      </div>
      <section className="grid gap-6 max-w-[1280px] mx-auto px-5 lg:px-0 my-12 lg:grid-cols-4">
        <div className="flex flex-col gap-10 lg:col-span-3">
          {touristSpots &&
            touristSpots?.map((spot) => (
              <TouristSpotB key={spot._id} theSpot={spot} />
            ))}
        </div>
        <div className="border-2 lg:col-span-1 border-title"></div>
      </section>
    </section>
  );
};

export default AllTouristSpot;
