import swal from "sweetalert";
import InputForm from "../Shared/InputForm/InputForm";
import { Helmet } from "react-helmet-async";

// import swal from "sweetalert";
const AddTouristsSpot = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristsSpotName = form.touristSpot_name.value;
    const countryName = form.country_Name.value;
    const travelTime = form.travel_time.value;
    const cost = form.cost.value;
    const location = form.location.value;
    const seasonality = form.seasonality.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const departure = form.departure_location.value;
    const age = form.age.value;
    const description = form.description.value;
    const image = form.photoURL.value;
    const touristSpot = {
      touristsSpotName,
      countryName,
      travelTime,
      seasonality,
      totalVisitorsPerYear,
      departure,
      location,
      age,
      description,
      image,
      cost,
      departureTime: "8:30 AM",
      included: ["Accommodation", "Island Hopping Tours"],
      notIncluded: ["Meals", "Alcoholic Beverages"],
      rating: 9.8,
      userEmail: "farhanmazumder75@gamil.com",
      userName: "Farhan Mazumder",
    };
    console.log(touristSpot);
    fetch("http://localhost:5000/tourist_spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          swal({
            title: "Good job!",
            text: "The product has been added successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };
  return (
    <section>
      <Helmet>
        <title>ROAM | Add Spot</title>
      </Helmet>
      <div>
        <InputForm
          taitle={`Add New Tourist Spot`}
          description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
          submitText="Add Tourist Spot"
          handleSubmit={handleAddProduct}
        />
      </div>
    </section>
  );
};

export default AddTouristsSpot;
