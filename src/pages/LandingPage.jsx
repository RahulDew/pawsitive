import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import mainImg from "../assets/mainimage.png";
import { Link } from "react-router-dom";
import background from "../assets/background.png";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-around px-10">
          <div
            className="w-1/2 space-y-5 flex flex-col
          justify-center items-center text-[#4E3000]"
          >
            <span className="font-semibold text-3xl">A PET CARE CENTER</span>
            <div className="text-center">
              <h1 className="font-extrabold text-[80px] leading-10">
                PAWSITIVE
              </h1>
              <span className="font-extralight text-[80px] ">Petcare</span>
            </div>
            <div className="flex gap-3">
              <Link
                to="/signup"
                className="w-[200px] h-[60px] flex justify-center items-center text-3xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
              >
                REGISTER
              </Link>
              <Link
                to="/login"
                className="w-[200px] h-[60px] flex justify-center items-center text-3xl font-semibold   border-2 border-[#4E3000] rounded-md "
              >
                RESCUE
              </Link>
            </div>
          </div>
          <div className="w-6/12">
            <img src={mainImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
