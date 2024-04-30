import { useLoaderData } from "react-router-dom";
// import TouristSpot from "./TouristSpot/TouristSpot";

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);

  return (
    <section className="max-w-[1280px] mx-auto px-5 lg:px-0">
      <div>
        <h3 className="my-12 text-3xl font-bold text-center capitalize text-primary">
          Sort functonallity will implement here
        </h3>
      </div>
      <div className="grid gap-6 my-12 lg:grid-cols-4">
        <div className="flex flex-col gap-6 lg:col-span-3">
          {/* {touristSpots &&
            touristSpots?.map((spot) => (
              <TouristSpot key={spot._id} theSpot={spot} />
            ))} */}
        </div>
        <div className="border-2 lg:col-span-1 border-title"></div>
      </div>
    </section>
  );
};

export default AllTouristSpot;
