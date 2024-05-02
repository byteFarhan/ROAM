const Slide = ({ slideImg, title, description }) => {
  return (
    <div className="">
      <div className="relative h-full">
        {/* <div className="size-full"> */}
        <img
          src={slideImg}
          alt=""
          className="object-cover h-[70vh] lg:h-[80vh] w-full"
        />
        {/* </div> */}
        <div className="absolute top-0 left-0 flex items-center justify-center bg-gradient-to-r from-[#13131866] to-[#13131866] size-full">
          <div className="max-w-[1280px] mx-auto space-y-4 text-center text-white md:space-y-5 lg:space-y-6 px-4 lg:px-0">
            {/* <h3 className="text-lg font-playfair-display lg:text-2xl">
                {subTitle}
              </h3> */}
            <h1 className="text-3xl md:text-4xl lg:text-[80px] font-bold text-white font-montserrat">
              {title}
            </h1>
            {/* <hr className="h-1 mx-auto border-none rounded bg-primary w-28" /> */}
            <p className="text-xl text-[#D9F1Fa] lg:text-3xl font-playfair-display font-semibold">
              {description}
            </p>
            <button className="btn-base bg-primary">Spacial Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
