const Loader = () => {
  const loader = {
    width: "40px",
    height: "40px",
    boxShadow: "0 0 20px 0 rgba(0,0,0,.15)",
    // margin-top: -20px,
    // margin-left: -20px,
    animation: "tp-rotateplane 1.2s infinite ease-in-out",
    // border-radius: 3px,
  };

  return (
    <div className="-mx-5 ease-in-out rounded-md shadow-lg bg-primary size-10 animate-rotateplane duration-1200 infinite"></div>
  );
};

export default Loader;
