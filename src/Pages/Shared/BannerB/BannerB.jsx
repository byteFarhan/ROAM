import separator from "../../../assets/separator.png";

const BannerB = ({ bannerTitle, bannerImage }) => {
  return (
    <section
      style={{ backgroundImage: `url(${bannerImage})` }}
      className="bg-no-repeat bg-cover h-[70vh] flex justify-center items-center bg-center px-5 lg:px-0"
    >
      <div className="">
        <h2 className="text-5xl lg:text-[90px] font-bold text-center text-white">
          {bannerTitle}
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
    </section>
  );
};

export default BannerB;
