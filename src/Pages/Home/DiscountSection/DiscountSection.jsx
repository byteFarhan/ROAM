import parallaxImg from "../../../assets/parallax-2.jpg";
import discount_Img from "../../../assets/discount_img.png";
const DiscountSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${parallaxImg})` }}
      className="py-12 mb-24 bg-center bg-no-repeat bg-cover"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-7xl lg:*:flex-1 gap-14 px-8 md:px-10 lg:px-0">
        <div>
          <img src={discount_Img} alt="" className="w-full" />
        </div>
        <div className="*:text-white space-y-6">
          <h3 className="text-5xl font-bold">Last Minute Offer</h3>
          <h5 className="text-xl italic font-bold font-playfair-display">
            Aerial view of Cape Town with Cape Town Stadium
          </h5>
          <p className="font-medium">
            {`Explore our latest discounts and offers, curated just for you! From
            exotic getaways to serene retreats, unlock unbeatable deals on your
            dream destinations. Plan your next adventure without breaking the
            bank!`}
          </p>
          <button className="px-8 py-4 font-bold !text-primary bg-white hover:bg-title hover:!text-white transition-all duration-100 delay-100 ease-in-out">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
