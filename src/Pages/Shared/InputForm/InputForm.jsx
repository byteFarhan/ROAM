import PropTypes from "prop-types";

const InputForm = ({
  taitle,
  description,
  submitText,
  handleSubmit,
  touristSpot,
}) => {
  const travelTimeOptions = [
    { value: "4 Day" },
    { value: "7 Day" },
    { value: "15 Day" },
    { value: "30 Day" },
    { value: "Other" },
  ];
  const seasonalityOptions = [
    { value: "Summer" },
    { value: "Winter" },
    { value: "Around The Year" },
  ];
  const countryOptions = [
    { value: "Thailand" },
    { value: "Bangladesh" },
    { value: "India" },
    { value: "Vietnam" },
    { value: "Malaysia" },
    { value: "Indonesia" },
    { value: "Cambodia" },
    { value: "Other" },
  ];
  //   const handleTravelTimeSelect = (e) => {
  //     console.log(e.target.value);
  //   };
  return (
    <div className="py-20 bg-top bg-no-repeat bg-cover bg-gray">
      <div className="px-6 py-12 mx-3 bg-white rounded-sm md:mx-6 max-w-7xl lg:mx-auto md:p-12">
        <div className="mb-5 space-y-6 text-center">
          <h1
            style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="md:text-5xl text-3xl text-[#374151] text-opacity-75 font-playfair-display"
          >
            {taitle}
          </h1>
          <p className="mx-auto lg:w-2/3">{description}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 md:px-10">
          {/* row-1 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                name="touristSpot_name"
                placeholder="Tourist spot name"
                defaultValue={touristSpot?.touristsSpotName}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Country Name</span>
              </label>
              <select
                // onChange={handleTravelTimeSelect}
                name="country_Name"
                id="country_Name"
                defaultValue={touristSpot?.countryName}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              >
                {countryOptions?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
              {/* <input
                type="text"
                name="country_Name"
                placeholder="Country Name"
                defaultValue={touristSpot?.countryName}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              /> */}
            </div>
          </div>
          {/* row-2 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter location"
                defaultValue={touristSpot?.location}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Cost</span>
              </label>
              <input
                type="number"
                name="cost"
                placeholder="Enter Cost (US Dolar)"
                defaultValue={touristSpot?.cost}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
          </div>
          {/* row-3 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Travel Time</span>
              </label>
              <select
                // onChange={handleTravelTimeSelect}
                name="travel_time"
                id="travel_time"
                defaultValue={touristSpot?.travelTime}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              >
                {travelTimeOptions?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Seasonality</span>
              </label>
              <select
                name="seasonality"
                id="seasonality"
                defaultValue={touristSpot?.seasonality}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              >
                {seasonalityOptions?.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* row-4 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Visitors Per Year</span>
              </label>
              <input
                type="number"
                name="totalVisitorsPerYear"
                placeholder="Visitors Per Year"
                required
                defaultValue={touristSpot?.totalVisitorsPerYear}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Photo</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
                defaultValue={touristSpot?.photoURL}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
          </div>
          {/* row-5 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Departure Location</span>
              </label>
              <input
                type="text"
                name="departure_location"
                placeholder="Enter Departure Location"
                required
                defaultValue={touristSpot?.departure}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Age Restriction</span>
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter required age"
                defaultValue={touristSpot?.age}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
              />
            </div>
          </div>
          {/* row-6 */}
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Details</span>
            </label>
            <textarea
              name="description"
              id="description"
              cols="10"
              rows="3"
              placeholder="Tourist spot details"
              defaultValue={touristSpot?.description}
              required
              className="w-full px-3 py-2 text-lg rounded-sm lg:p-4 placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
            ></textarea>
            {/* <input
              type="text"
              name="details"
              placeholder="Tourist spot details"
              defaultValue={touristSpot?.details}
              required
              className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300 bg-gray"
            /> */}
          </div>
          <button
            // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="w-full mb-5 text-xl font-semibold text-white btn md:text-2xl bg-primary hover:bg-primary"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

InputForm.propTypes = {
  taitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  submitText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  touristSpot: PropTypes.object,
};
export default InputForm;
