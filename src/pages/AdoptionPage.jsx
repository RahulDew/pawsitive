import React, { useState } from "react";
import patternBg from "../assets/patterns-bg.png";
import AuthNav from "../components/AuthNav";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import birdMain from "../assets/birdmain.png";
import Footer from "../components/Footer";

export default function AdoptionPage() {
  //   const [formData, setFormData] = useState({
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     console.log("Form submitted:", formData);
  //   };

  return (
    <>
      <Navbar />
      <section
        className="relative pt-16 min-h-screen bg-cover bg-center bg-[#F6F1F1] flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${patternBg})`,
        }}
      >
        {/* heading section */}
        <div className=" flex items-center justify-around px-10">
          {/* image part */}
          <div className="w-6/12">
            <img src={birdMain} alt="" />
          </div>
          {/* heading part */}
          <div
            className="w-1/2 space-y-5 flex flex-col
          justify-center items-center text-[#4E3000]"
          >
            <span className="font-semibold text-3xl">A PET CARE CENTER</span>
            <div className="text-center">
              <span className="font-extralight text-[80px] ">ADOPTION</span>
            </div>
            <div className="flex gap-3">
              <Link
                to="/"
                className="px-5 py-2 flex justify-center items-center text-2xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
              >
                Find YOUR Pawtner
              </Link>
            </div>
          </div>
        </div>
        {/* INFO section */}

        <div className="flex flex-wrap gap-5">
          {[1, 2, 3, 4].map((item, idx) => (
            <div className="w-64 h-72 relative  flex justify-center items-center flex-col ">
              <div className="w-36 h-36 p-1 rounded-full bg-white absolute -top-20 m-auto">
                <img src={birdMain} alt="" />
              </div>
              <div className="bg-[#D6995E] w-full h-full rounded-md pt-16 px-5">
                <h1 className="text-[#4E3000]">Name: </h1>
                <p className="text-[#4E3000]">Breed: </p>
                <p className="text-[#4E3000]">Age: </p>
                <br />
                <p className="text-[#4E3000]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto officiis nostrum harum temporibus
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-8/12 text-center py-8 pb-20">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-4xl font-semibold text-[#4E3000]">
              Why Adopt?
            </h1>
            <p className="text-lg text-[#4E3000]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quod, voluptatum, quia, quae quos quidem autem doloremque
              recusandae quibusdam consequuntur voluptatem. Quisquam quod,
              voluptatum, quia, quae quos quidem autem doloremque recusandae
              quibusdam consequuntur voluptatem.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
