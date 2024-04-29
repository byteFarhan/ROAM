import { useLoaderData, useParams } from "react-router-dom";
import separator from "../../assets/separator.png";
import { MdOutlineAccessTime } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";

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
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-no-repeat bg-cover h-[70vh] flex justify-center items-center bg-gradient-to-r from-[#13131866] to-[#13131866] bg-center px-5 lg:px-0"
      >
        <div className="">
          <h2 className="text-5xl lg:text-[90px] font-bold text-center text-white">
            {touristsSpotName}
          </h2>
          <img src={separator} alt="" className="mx-auto" draggable="false" />
          {/* <div className="px-5 py-10">
          <div className="">
            <div className="flex items-center justify-between">
              <h5 className="text-3xl font-bold text-white font-playfair-display">
                {average_cost}
              </h5>
              <h5 className="text-3xl font-bold text-white">{rating}</h5>
            </div>
          </div>
        </div> */}
        </div>
        {/* <h1 className="text-3xl font-bold">{tourists_spot_name}</h1>
      <p className="text-3xl font-bold">{_id}</p> */}
      </div>
      <div className="max-w-[1280px] my-20 lg:my-24 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="px-5 lg:col-span-3 lg:px-0">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold lg:text-4xl text-title">
              {touristsSpotName}
            </h3>
            <h5 className="text-xl italic font-bold font-playfair-display text-primary">
              {cost}/Per Person
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
            <ul className="*:flex *:flex-col *:md:flex-row *:gap-3 *:md:gap-0  *:md:items-center *:p-6 *:border-y *:border-[#ebebeb]">
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
              <li className="transition-all duration-100 hover:bg-gray">
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
        <div className="border-2 lg:col-span-1 border-title"></div>
      </div>
    </section>
  );
};

export default TouristSpotDetails;
