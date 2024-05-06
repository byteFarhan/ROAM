import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import BannerB from "../Shared/BannerB/BannerB";

const TouristSpotDetails = () => {
  const touristSpot = useLoaderData();
  // console.log(touristSpot);
  // const id = useParams();
  // console.log(id);

  const {
    image,
    touristsSpotName,
    description,
    cost,
    travelTime,
    age,
    rating,
    countryName,
    location,
    seasonality,
    totalVisitorsPerYear,
    departure,
    included,
    notIncluded,
    departureTime,
  } = touristSpot;
  //   console.log(Departure);
  return (
    <section>
      <Helmet>
        <title>ROAM | Spot Details</title>
      </Helmet>
      {/* Banner section */}
      <BannerB bannerTitle={touristsSpotName} bannerImage={image} />
      <section className="max-w-[1280px] my-20 lg:my-24 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="px-5 lg:col-span-3 lg:px-0">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold lg:text-4xl text-title">
              {touristsSpotName}
            </h3>
            <h5 className="text-xl italic font-bold font-playfair-display text-primary">
              ${cost}/Per Person
            </h5>
          </div>
          <p className="my-6 text-natural">{description}</p>
          <div className="*:flex *:gap-2 *:capitalize *:items-center *:font-medium *:lg:text-lg flex gap-10">
            <p>
              <MdOutlineAccessTime />
              {travelTime}
            </p>
            <p>
              <BsFillPersonVcardFill />
              {age}+ age
            </p>
            <p className="transition-all duration-75 hover:text-primary">
              <FaHeart />
              {`Popular`}
            </p>
          </div>
          <div className="my-6">
            <ul className="*:flex *:flex-col *:md:flex-row *:gap-3 *:md:gap-0  *:md:items-center *:p-6 *:border-t *:border-[#ebebeb]">
              <li className="transition-all duration-100 hover:bg-gray">
                <p className="text-lg font-bold text-title w-[40%]">
                  Destination
                </p>
                <p className="capitalize">{touristsSpotName}</p>
              </li>
              <li className="transition-all duration-100 hover:bg-gray">
                <p className="text-lg font-bold text-title md:w-[40%]">
                  Departure Time
                </p>
                <p className="capitalize"> Approximately {departureTime}.</p>
              </li>
              <li className="transition-all duration-100 hover:bg-gray">
                <p className="text-lg font-bold text-title md:w-[40%]">
                  Departure Location
                </p>
                <p className="capitalize">{departure}</p>
              </li>
              <li className="transition-all duration-100 hover:bg-gray">
                <p className="text-lg font-bold text-title md:w-[40%]">
                  Dress Code
                </p>
                <p className="capitalize">{`Casual. Comfortable athletic clothing, hiking shoes, hat and warm jacket.`}</p>
              </li>
              <li className="transition-all duration-100 hover:bg-gray">
                <p className="text-lg font-bold text-title md:w-[40%]">
                  Included
                </p>
                <div className="flex flex-wrap gap-3 capitalize md:gap-5">
                  {included?.map((item) => (
                    <p key={item} className="flex gap-1.5 items-center">
                      <span className="text-primary">
                        <IoCheckmarkDoneOutline />
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </li>
              <li className="transition-all duration-100 border-b hover:bg-gray">
                <p className="text-lg font-bold text-title md:w-[40%]">
                  Not Included
                </p>
                <div className="flex flex-wrap gap-3 capitalize md:gap-5">
                  {notIncluded?.map((item) => (
                    <p key={item} className="flex gap-1.5 items-center">
                      <span className="text-primary">
                        <RxCross2 />
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-1-title">
          <div className="lg:h-[80vh]  border-title border-2 "></div>
        </div>
      </section>
    </section>
  );
};

export default TouristSpotDetails;
