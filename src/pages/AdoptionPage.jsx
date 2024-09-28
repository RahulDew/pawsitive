import React, { useState } from "react";
import patternBg from "../assets/patterns-bg.png";
import AuthNav from "../components/AuthNav";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import birdMain from "../assets/birdmain.png";
import Footer from "../components/Footer";
import adoptcaw from "../assets/adopt-caw.png";
import adoptcat from "../assets/adopt-cat.png";
import adoptdog from "../assets/adopt-dog.png";
import adopthamster from "../assets/adopt-hamster.png";
import adoptparrot from "../assets/adopt-parrot.png";
import { desc } from "framer-motion/client";

const AdoptionData = [
  {
    name: "Dog",
    img: adoptdog,
    breed: "Golden Retriever",
    age: "2 years",
    desc: "Friendly, loyal, and energetic. Bella loves playing fetch and enjoys long walks in the park.",
  },
  {
    name: "Cat",
    img: adoptcat,
    breed: "Siamese",
    age: "1 year",
    desc: "Independent, curious, and affectionate. Whiskers loves to explore his surroundings and enjoys quiet moments curled up by the window.",
  },
  {
    name: "Parrot",
    img: adoptparrot,
    breed: "Macaw",
    age: "3 years",
    desc: "Social, curious, and vocal. Tweety loves chirping and interacting with humans. ",
  },
  {
    name: "Hamster",
    img: adopthamster,
    breed: "Syrian",
    age: "1 year",
    desc: "Active, friendly, and loves being held. Pepper enjoys chewing on toys and exploring his surroundings.",
  },
  {
    name: "Caw",
    img: adoptcaw,
    breed: "African Grey",
    age: "5 years",
    desc: "Gentle, affectionate, and calm. Daisy is very friendly and enjoys human interaction.",
  },
];

export default function AdoptionPage() {
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
          {AdoptionData.map((pet, idx) => (
            <div className="w-64 h-72 relative  flex justify-center items-center flex-col ">
              <div className="w-36 h-36 p-1 rounded-full bg-white absolute -top-20 m-auto flex justify-center items-center">
                <img
                  src={pet.img}
                  alt={pet.name}
                  className="object-cover rounded-full"
                />
              </div>
              <div className="bg-[#D6995E] w-full h-full rounded-md pt-16 px-5 justify-center">
                <h1 className="text-[#4E3000]">
                  Name: <span className="font-bold pl-5"> {pet.name} </span>{" "}
                </h1>
                <p className="text-[#4E3000]">
                  Breed: <span className="font-bold pl-5">{pet.breed}</span>
                </p>
                <p className="text-[#4E3000]">
                  Age: <span className="font-bold pl-8">{pet.age}</span>
                </p>
                <br />
                <p className="text-[#4E3000]">{pet.desc}</p>
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
              Adopting these pets from Pawsitive gives them a loving forever
              home and brings immense joy, companionship, and unconditional
              love into your life.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
