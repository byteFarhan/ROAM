import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BannerB from "../Shared/BannerB/BannerB";
import TouristSpot from "../Shared/TouristSpot/TouristSpot";
import { Helmet } from "react-helmet-async";

const CountrySpots = () => {
  const theCountry = useLoaderData();
  // console.log(theCountry);
  const params = useParams();
  // console.log(params);
  const [countrySpots, setCountrySpots] = useState([]);
  useEffect(() => {
    fetch(
      `https://roam-server-ten.vercel.app/tourist_spots?country=${params?.country}`
    )
      .then((res) => res.json())
      .then((data) => setCountrySpots(data));
  }, [params]);
  // console.log(countrySpots);
  return (
    <section>
      <Helmet>
        <title>ROAM | {theCountry?.countryName}</title>
      </Helmet>
      <BannerB
        bannerTitle={theCountry?.countryName}
        bannerImage={theCountry?.image}
      />
      <section className="py-16 bg-gray lg:py-24">
        <div className="grid grid-cols-1 gap-10 px-5 mx-auto max-w-7xl lg:grid-cols-7 lg:px-0">
          {countrySpots?.length ? (
            <>
              <div className="grid grid-cols-1 gap-6 lg:col-span-5 md:grid-cols-2">
                {countrySpots?.length > 0 &&
                  countrySpots.map((spot) => (
                    <TouristSpot key={spot._id} touristSpot={spot} />
                  ))}
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-5 h-[70vh] flex justify-center items-center">
                <h3 className="text-3xl font-bold text-center lg:text-5xl">
                  No Spot Available Yet!
                </h3>
              </div>
            </>
          )}

          <div className="lg:col-span-2">
            <div className="border-2 border-title h-[70vh]"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CountrySpots;
