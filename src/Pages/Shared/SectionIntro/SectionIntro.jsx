import { Typewriter } from "react-simple-typewriter";

const SectionIntro = ({ subTitle, title, description }) => {
  return (
    <div className="px-5 mx-auto mb-8 text-center lg:w-3/5 lg:mb-12 lg:px-0">
      <h5 className="text-lg italic font-bold lg:text-xl font-playfair-display text-primary">
        {/* {subTitle} */}
        <Typewriter
          words={[subTitle]}
          loop={3}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          // onLoopDone={handleDone}
          // onType={handleType}
        />
      </h5>

      <h3 className="mt-2.5 mb-3 lg:mt-3 lg:mb-5 text-3xl font-bold leading-normal lg:text-4xl text-title dark:text-title-d">
        {title}
      </h3>
      <p className="text-sm text-natural dark:text-natural-d lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default SectionIntro;
