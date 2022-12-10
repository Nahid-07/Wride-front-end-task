import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import girl from "../images/Screenshot (97).png";
import { HiOutlineUser } from "react-icons/hi";
import { AuthContext } from "../Context/Context";

const Signup = () => {
  //   const navigate = useNavigate("/");
  const { signUp, user,profile } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate("/");
  } else {
    navigate("/login");
  }
  const hanldeSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        profile(userName)
        navigate("/");
      })
      .catch((err) => console.log(err));

    console.log(userName, email, password);
  };
  return (
    <section className="bg-orange-200 h-screen flex items-center">
      <div className=" container mx-auto md:flex justify-around items-center">
        <div className="hidden md:block w-1/3">
          <img src={girl} className="w-full" alt="" />
        </div>
        <div className="md:w-1/2 px-3 md:px-0 flex justify-center">
          <form onSubmit={hanldeSignUp} className="w-96">
            <div>
              <h1 className="text-center text-3xl font-semibold mb-5">LOGO</h1>
              <h3 className="text-2xl font-semibold mb-4">Welcome back</h3>
            </div>
            <div className="relative">
              <label className="block mb-2">Full Name</label>
              <span className="absolute left-2 top-[44px] text-2xl">
                <HiOutlineUser />
              </span>
              <input
                type="text"
                name="userName"
                className="w-full pl-8 py-3 "
                placeholder="Your full name"
              />
            </div>
            <div className="relative mt-4">
              <label className="block mb-2">Email</label>
              <span className="absolute left-2 top-[44px] text-2xl">
                <HiOutlineMail />
              </span>
              <input
                type="email"
                name="email"
                className="w-full pl-8 py-3 "
                placeholder="Your email"
              />
            </div>
            <div className="relative mt-4">
              <label className="block mb-2">Password</label>
              <span className="absolute left-2 top-[44px] text-2xl">
              <BiLock />
              </span>
              <input
                type="password"
                name="password"
                className="w-full pl-8 py-3 "
                placeholder="Password"
              />
            </div>
            <div className=" flex justify-center w-full mt-5">
              <button className="btn w-2/5">Sign up</button>
            </div>
            <div className="divider">OR</div>
            <div className=" flex justify-center gap-5">
              <button className="btn btn-square text-xl bg-white">
                <FcGoogle />
              </button>
              <button className="btn btn-square text-blue-400 text-xl bg-white">
                <FaTwitter />
              </button>
            </div>
            <div>
              <p className="mt-2 text-center font-medium">
                Already have an account ? <Link to="/">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
