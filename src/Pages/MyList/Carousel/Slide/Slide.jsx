import { Typewriter } from "react-simple-typewriter";
import separatorImg from "../../../../assets/separator.png";
const Slide = ({ slideImg, title }) => {
  return (
    <div className="">
      <div className="relative h-full">
        {/* <div className="size-full"> */}
        <img
          src={slideImg}
          alt={title}
          className="object-cover h-[70vh] lg:h-[80vh] w-full"
        />
        {/* </div> */}
        <div className="absolute top-0 left-0 flex items-center justify-center bg-gradient-to-r from-[#13131866] to-[#13131866] size-full">
          <div className="px-4 mx-auto text-center text-white max-w-7xl md:space-y-5 lg:space-y-6 lg:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-[80px] font-bold text-white font-montserrat">
              {/* {title} */}
              <Typewriter
                words={[title]}
                loop={3}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </h1>
            <img src={separatorImg} alt="" className="mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
