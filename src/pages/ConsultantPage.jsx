import React from "react";
import patternBg from "../assets/patterns-bg.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConsultanPage() {
  return (
    <>
      <Navbar />
      <section
        className="relative pt-16 min-h-screen bg-cover bg-center bg-[#F6F1F1] flex justify-center items-center flex-col space-y-10"
        style={{
          backgroundImage: `url(${patternBg})`,
        }}
      >
        {/* heading section */}
        <div className=" flex items-center justify-around px-10">
          {/* heading part */}
          <div
            className="w-full flex flex-col
          justify-center items-center text-center text-[#4E3000] space-y-10"
          >
            <span className="font-extralight text-[80px] leading-10">
              CONSULTANCY
            </span>
            <Link
              to="/"
              className="px-5 py-2 flex justify-center items-center text-2xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
            >
              Discuss with experts
            </Link>
          </div>
        </div>

        <div className="h-full w-5/6 md:w-5/12 px-10 bg-[#DEB982] p-10 rounded text-center">
          <h3 className="font-semibold font-mono text-4xl text-[#6B4200]">
            Coming soon
          </h3>
        </div>

        {/* INFO section */}
      </section>
      <Footer />
    </>
  );
}
