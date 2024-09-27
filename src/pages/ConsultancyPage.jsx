import React from "react";
import patternBg from "../assets/patterns-bg.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import birdMain from "../assets/birdmain.png";
import Footer from "../components/Footer";
import doctorlogo from "../assets/doctor.png";
import consultancy from "../assets/consultancy.png";

export default function ConsultancyPage() {
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
            <img src={consultancy} alt="" />
          </div>
          {/* heading part */}
          <div
            className="w-1/2 space-y-5 flex flex-col
          justify-center items-center text-[#4E3000]"
          >
            <span className="font-semibold text-3xl">A PET CARE CENTER</span>
            <div className="text-center">
              <span className="font-extralight text-[80px]">CONSULTANCY</span>
            </div>
            <div className="flex gap-3">
              <Link
                to="/#check-consultancy"
                className="px-5 py-2 flex justify-center items-center text-2xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
              >
                Discuss with experts
              </Link>
            </div>
          </div>
        </div>
        {/* INFO section */}

        <div id="check-consultancy" className="flex flex-wrap gap-5 mb-24">
          {[1, 2, 3, 4].map((item, idx) => (
            <div
              key={idx}
              className="w-64 pt-5 flex justify-center items-center flex-col bg-[#FFE3C7] gap-3"
            >
              <div className="w-36 h-36 p-1 rounded-full bg-white m-auto border-4 border-[#FFC288]">
                <img src={doctorlogo} alt="" />
              </div>
              <div className="w-full h-full rounded-md text-center space-y-3">
                <span className="text-[#4E3000] font-semibold text-2xl">
                  Dr. Drone
                </span>

                <br />
                <p className="text-[#4E3000] px-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto officiis nostrum harum temporibus
                </p>
                <Link
                  to={`/consultancy/:${item}`}
                  className="w-full px-5 py-2 flex justify-center items-center text-2xl font-semibold bg-[#FFC288] text-white rounded-md "
                >
                  Consult Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
