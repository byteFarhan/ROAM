import { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import ListTR from "./ListTR/ListTR";
import swal from "sweetalert";

const MyList = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const [mySpots, setMySpots] = useState([]);
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this spot!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/tourist_spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              swal({
                title: "Good job!",
                text: "The Spot has been deleted successfullys",
                icon: "success",
              });
              const remainingSpots = mySpots.filter((spot) => spot._id !== id);
              console.log(remainingSpots);
              setMySpots(remainingSpots);
            }
          })
          .catch((error) => {
            console.log(error);
            swal({
              text: error.message,
              icon: "error",
            });
          });
      } else {
        swal("The spot deletion has been canceled.");
      }
    });
  };
  useEffect(() => {
    if (!user) {
      return;
    }
    fetch(`http://localhost:5000/tourist_spots?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMySpots(data));
  }, [user]);

  return (
    <section>
      <Helmet>
        <title>ROAM | My List</title>
      </Helmet>
      {/* carousel section */}
      <Carousel mySpots={mySpots} />
      {/* Show listed Spots section */}

      <section className="mx-auto my-16 md:my-24 max-w-7xl">
        {!mySpots?.length > 0 && (
          <div className="h-[80vh] flex justify-center items-center">
            <h3 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl text-title">{`You haven't added any spots yet!`}</h3>
          </div>
        )}
        {mySpots?.length > 0 && (
          <>
            <h3 className="mb-6 text-3xl italic font-bold text-center font-playfair-display md:text-4xl lg:text-5xl lg:mb-12">{`The spots you've added.`}</h3>
            <div className="overflow-x-scroll">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="*:md:text-lg *:lg:text-xl font-bold">
                    <th></th>
                    <th>The Spot</th>
                    <th>Country</th>
                    <th>Cost</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {mySpots.length > 0 &&
                    mySpots.map((spot) => (
                      <ListTR
                        key={spot._id}
                        spot={spot}
                        handleDelete={handleDelete}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </section>
  );
};

export default MyList;
