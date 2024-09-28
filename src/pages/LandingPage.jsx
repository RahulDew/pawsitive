import React from "react";
import Navbar from "../components/Navbar";
import { color, motion } from "framer-motion";
import mainImg from "../assets/mainimage.png";
import { Link } from "react-router-dom";
import background from "../assets/background.png";
import doggi from "../assets/doggi.png";
import patternBg from "../assets/patterns-bg.png";
import grooming from "../assets/grooming.png";
import store from "../assets/store.png";
import doctorcon from "../assets/doctor-con.png";
import petsitting from "../assets/pet-sitting.png";
import ngo from "../assets/ngo.png";
import { img, link } from "framer-motion/client";
import doctorlogo from "../assets/doctor.png";
import consultancy from "../assets/consultancy.png";
import client from "../assets/client.png";
import Footer from "../components/Footer";

const services = [
  { name: "Grooming", img: grooming, color: "bg-blue-300", link: "/grooming" },
  { name: "Store", img: store, color: "bg-pink-300", link: "/store" },
  {
    name: "Consultation",
    img: doctorcon,
    color: "bg-orange-300",
    link: "/consultancy",
  },
  { name: "Nearby NGO", img: ngo, color: "bg-green-300", link: "/rescue" },
  {
    name: "Pet sitting",
    img: petsitting,
    color: "bg-red-300",
    link: "/petsitting",
  },
];

const testimonials = [
  {
    name: "Jyoti Sahu",
    review:
      "The pet sitting service was fantastic. I was nervous leaving my parrot while on vacation, but Pawsitive matched me with a sitter who was experienced and caring. Couldn’t be happier!",
  },
  {
    name: "Peritosh",
    review:
      "Pawsitive has been a lifesaver! Scheduling a vet consultation was easy, and the vet was so knowledgeable about my dog's symptoms. Highly recommend for busy pet parents!",
  },
  {
    name: "Bhupesh Dewangan",
    review:
      "My rabbit’s health has improved so much since using the chatbox for advice. It gave me peace of mind and saved us a trip to the vet. Love this service!",
  },
];

export default function LandingPage() {
  return (
    <main className="bg-[#F6F1F1] ">
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
                to="/rescue"
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
      {/* New Data */}
      <section
        className="relative pt-16 min-h-screen bg-cover bg-center bg-[#F6F1F1] flex justify-center items-center flex-col"
        style={{
          backgroundImage: `url(${patternBg})`,
        }}
      >
        {/* heading section */}
        <div className="flex items-center justify-around">
          {/* image part */}
          <div className="w-6/12">
            <img src={doggi} alt="" />
          </div>
          {/* heading part */}
          <div
            className="w-1/2 space-y-5 flex flex-col
          justify-center items-center text-[#4E3000] "
          >
            <div className="text-center">
              <span className="font-extralight text-[80px] ">ABOUT US</span>
            </div>
            <p className="w-4/6 text-center text-lg">
              We bring everything positive for your fur buddy at one place.
              Pawsitive is an online platform that provides a wide range of
              healthcare services for pets, including dogs, cats, birds, and
              mammals. The platform aims to simplify pet healthcare by offering
              convenient access to veterinary services, wellness resources, and
              products. .
            </p>
          </div>
        </div>

        {/* Service section */}
        <div className="text-center space-y-10 my-14">
          <h3 className="font-normal text-[#4E3000] text-4xl ">
            WAYS WE CAN SERVE YOU !
          </h3>

          <div className="w-4/6 m-auto flex flex-wrap gap-10 justify-center items-center">
            {services.map((service, idx) => (
              <Link
                to={service.link}
                key={idx}
                className={`w-64 h-64 relative  flex justify-center items-center flex-col ${service.color} rpunded-md `}
              >
                <div className=" absolute -top-10 m-auto flex justify-center items-center">
                  <img
                    src={service.img}
                    className="object-cover rounded-full"
                  />
                </div>
                <div
                  className={`bg-white w-full absolute bottom-0 px-5 py-2 text-center`}
                >
                  <h4 className="font-normal text-3xl">{service.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* testimonials */}
        <h3 className="font-normal text-[#4E3000] text-4xl  my-14">
          Testimonials!
        </h3>
        <div id="check-consultancy" className="flex flex-wrap gap-5 mb-24">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-64 pt-5 flex justify-center items-center flex-col bg-[#FFE3C7] gap-3 pb-5"
            >
              <div className="w-36 h-36 p-1 rounded-full bg-white m-auto border-4 border-[#FFC288]">
                <img src={client} alt="" className="rounded-full" />
              </div>
              <div className="w-full h-full rounded-md text-center space-y-3">
                <span className="text-[#4E3000] font-semibold text-2xl">
                  {item.name}
                </span>

                <br />
                <p className="text-[#4E3000] px-5">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
