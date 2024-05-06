import swal from "sweetalert";
import InputForm from "../Shared/InputForm/InputForm";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

// import swal from "sweetalert";
const AddTouristsSpot = () => {
  const { user } = useAuth();
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
      rating: 9.6,
      userEmail: user?.email,
      userName: user?.displayName,
    };
    // console.log(touristSpot);
    fetch("https://roam-server-ten.vercel.app/tourist_spots", {
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
            text: "The Spot has been added successfully",
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
        <title>ROAM | Add Spot</title>
      </Helmet>
      <section>
        <InputForm
          taitle={`Add New Tourist Spot`}
          description={`Discover breathtaking destinations with our travel agency! Explore iconic landmarks and hidden gems. Book now for unforgettable experiences!`}
          submitText="Add Tourist Spot"
          handleSubmit={handleAddProduct}
        />
      </section>
    </section>
  );
};

export default AddTouristsSpot;
