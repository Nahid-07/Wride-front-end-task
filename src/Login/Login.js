import React, { useContext, useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import girl from "../images/Screenshot (97).png";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import logo from '../images/logo3-removebg-preview.png'
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState("");
  const { login,googleLogIn } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then(() => {
        toast.success('Successfully logged in')
        navigate(from, { replace: true });
      })
      .catch((err) => setError(err.message));
    setError("");
  };
  const handleGoogleLogIn = ()=>{
    googleLogIn()
    .then(()=>{
      navigate('/')
    }).catch(err =>{})
  }
  return (
    <section className="md:bg-orange-200 bg-slate-100 h-screen flex items-center">
      <div className=" container mx-auto md:flex justify-around items-center">
        <div className="hidden md:block w-1/3">
          <img src={girl} className="w-full" alt="" />
        </div>
        <div className="md:w-1/2 px-3 md:px-0 flex justify-center">
          <form onSubmit={handleLogin} className="w-96">
            <div>
              <div className="flex justify-center mb-5 md:hidden">
                <img className="w-24" src={logo} alt="" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Welcome back</h3>
            </div>
            <div className="relative">
              <label className="block mb-2">User name or email</label>
              <span className="absolute left-2 top-[44px] text-2xl">
                <HiOutlineUser />
              </span>
              <input
                type="email"
                name="email"
                className="w-full pl-8 py-3 "
                placeholder="Email"
              />
            </div>
            <div className="relative mt-4">
              <label className="block mb-2">Email</label>
              <span className="absolute left-2 top-[44px] text-2xl">
                <BiLock />
              </span>
              <input
                type="password"
                name="password"
                className="w-full pl-8 py-3 "
                placeholder="Password"
              />
              <label className="block">Forget password ?</label>
              <p className="text-red-600">{error}</p>
            </div>
            <div className=" flex justify-center w-full mt-5">
              <button className="btn w-2/5">Login</button>
            </div>
            <div className="divider">OR</div>
            <div className=" flex justify-center gap-5">
              <button onClick={handleGoogleLogIn} className="btn btn-square text-xl bg-white">
                <FcGoogle />
              </button>
              <button className="btn btn-square text-blue-400 text-xl bg-white">
                <FaTwitter />
              </button>
            </div>
            <div>
              <p className="mt-2 text-center font-medium">
                New to this site ? <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
