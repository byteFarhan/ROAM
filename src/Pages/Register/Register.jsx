import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <Helmet>
        <title>ROAM | Register</title>
      </Helmet>
      <div className="py-6 lg:bg-[#F3F3F3] px-5 md:px-0">
        <div className="mx-auto max-w-7xl"></div>
        <div className="min-h-[87vh] hero ">
          <div className=" w-full max-w-[500px] md:px-6 card rounded lg:bg-base-100 bg-[#F3F3F3]">
            <h3 className="text-[#403F3F] text-3xl font-semibold text-center pt-10">
              Register your account
            </h3>
            <hr className="w-5/6 mx-auto mt-10" />
            <form className="pb-0 card-body">
              {/* <form onSubmit={handleRegistation} className="pb-0 card-body"> */}
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Photo URL/(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                />
              </div>
              <div className=" form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="rounded input-bordered input lg:bg-[#F3F3F3]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    className="input rounded input-bordered w-full lg:bg-[#F3F3F3]"
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-3"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>

                <div className="flex gap-1 mt-3">
                  <input type="checkbox" name="terms" />
                  <label htmlFor="terms">
                    <span>
                      Accept{" "}
                      <a
                        href="#terms"
                        className="text-pink-600 transition-all delay-100 hover:underline"
                      >
                        Term & Conditions
                      </a>
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-2 form-control">
                <button className="text-white transition-all ease-in-out delay-100 bg-title btn-base hover:bg-primary">
                  Register
                </button>
              </div>
            </form>
            <div className="px-5 pb-5">
              {"```````````````````````````"}
              <p className="my-3 text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-pink-600 hover:underline">
                  Register
                </Link>
              </p>
            </div>

            {/* </form> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
