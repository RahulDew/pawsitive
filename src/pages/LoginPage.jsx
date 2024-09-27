import React, { useState } from "react";
import patternBg from "../assets/patterns-bg.png";
import AuthNav from "../components/AuthNav";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <AuthNav />
      <section
        className="relative pt-16 min-h-screen bg-cover bg-center bg-[#F6F1F1] flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${patternBg})`,
        }}
      >
        <div className="text-center mb-8 space-y-3">
          <h3 className="text-4xl font-bold text-[#8B4513]">Welcome Back</h3>
          <p className="text-lg text-[#8B4513]">
            Great to see you back, login to continue
          </p>
        </div>
        <div className="h-full w-5/6 md:w-5/12 px-10 bg-[#DEB982] p-10 ">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 flex flex-col w-full"
          >
            <input
              placeholder="E-MAIL"
              name="email"
              type="email"
              onChange={handleChange}
              className="w-full bg-[#F6F1F1] text-lg font-normal p-2 rounded-md focus:outline-none placeholder:text-[#8B4513]"
            />

            <input
              placeholder="PASSWORD"
              name="password"
              type="password"
              onChange={handleChange}
              className="w-full bg-[#F6F1F1] text-lg font-normal p-2 rounded-md focus:outline-none placeholder:text-[#8B4513]"
            />

            <button
              type="submit"
              className="w-full bg-[#8B4513] hover:bg-[#A0522D] text-white text-lg font-normal p-2 rounded-md focus:outline-none duration-300"
            >
              REGISTER
            </button>
            <p className="text-[#8B4513] text-lg text-center">
              Not registered ?{" "}
              <Link to={"/login"} className="font-bold underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
