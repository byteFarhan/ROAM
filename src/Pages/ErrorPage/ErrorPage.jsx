import { Link } from "react-router-dom";
import errorpageImg from "../../assets/error-page.svg";
// import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div>
      {/* <Helmet>
        <title>House Rent | 404</title>
      </Helmet> */}
      <img
        src={errorpageImg}
        alt=""
        className="object-cover h-[80vh] mx-auto"
      />
      <div className="text-center">
        <Link to={"/"}>
          <button className="my-3 text-white rounded-none btn-base bg-primary">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
