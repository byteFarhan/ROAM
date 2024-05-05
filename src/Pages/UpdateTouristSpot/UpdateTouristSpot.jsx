import { useLoaderData } from "react-router-dom";
import InputForm from "../Shared/InputForm/InputForm";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

const UpdateTouristSpot = () => {
  const theSpot = useLoaderData();
  //   console.log(theSpot);
  const handleUpdateProduct = (e) => {
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
    const updatedtouristSpot = {
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
    };
    // console.log(updatedtouristSpot);
    fetch(`http://localhost:5000/tourist_spots/${theSpot?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedtouristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          swal({
            title: "Good job!",
            text: "The Spot has been updated successfully",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((error) => {
        swal({
          text: error.message,
          icon: "error",
        });
      });
  };
  return (
    <section>
      <Helmet>
        <title>ROAM | Update Spot</title>
      </Helmet>
      <section>
        <InputForm
          taitle={`Update Tourist Spot`}
          description={`Update your tourist spot information effortlessly! Our streamlined form ensures accurate and up-to-date listings for travelers worldwide. Simplify your management process today!`}
          submitText="Update Tourist Spot"
          handleSubmit={handleUpdateProduct}
          touristSpot={theSpot}
        />
      </section>
    </section>
  );
};

export default UpdateTouristSpot;
