import React, { useState } from "react";
import patternBg from "../assets/patterns-bg.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bangalCat from "../assets/bangal-cat.png";
import Dropdown from "../components/Dropdown";

const menuItems = [
  { label: "Dashboard", href: "#" },
  { label: "Settings", href: "#" },
  { label: "Earnings", href: "#" },
  { label: "Sign out", href: "#" },
];

const objects = [{ label: "type", value: [] }];

export default function RescuePage() {
  const [selectedValues, setSelectedValues] = useState({
    animalType: "",
    symptom1: "",
    symptom2: "",
    symptom3: "",
    symptom4: "",
    symptom5: "",
  });
  //   const [isOpen, setIsOpen] = useState(false);
  const handleSelectChange = (dropdownKey, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [dropdownKey]: value,
    }));
  };

  const animalOptions = ["Dog", "Cat", "Bird", "Rabbit"];
  const symptom1Options = ["Coughing", "Vomiting", "Diarrhea", "Lethargy"];
  const symptom2Options = ["Coughing", "Vomiting", "Diarrhea", "Lethargy"];
  const symptom3Options = ["Coughing", "Vomiting", "Diarrhea", "Lethargy"];
  const symptom4Options = ["Coughing", "Vomiting", "Diarrhea", "Lethargy"];
  const symptom5Options = ["Coughing", "Vomiting", "Diarrhea", "Lethargy"];

  //   const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSubmit = () => {
    console.log("Selected values", selectedValues);
  };
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
            <div className="flex justify-evenly items-center flex-wrap py-20 gap-10 ">
              <div className="relative w-[400px]">
                <img
                  src={bangalCat}
                  alt=""
                  className="w-72 absolute -top-[62px]"
                />
                <Link
                  to="/"
                  className="px-8 py-2 flex justify-center items-center text-xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
                >
                  LOOK FOR NGO AND HOSPITAL
                </Link>
              </div>
              <div className="relative w-[400px]">
                <img
                  src={bangalCat}
                  alt=""
                  className="w-72 absolute -top-[62px]"
                />
                <Link
                  to="/"
                  className="px-8 py-2 flex justify-center items-center text-xl font-semibold bg-[#4E3000] text-[#FFF1DB] border-2 border-[#4E3000] rounded-md "
                >
                  VET PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-5/6 md:w-5/12 px-10 bg-[#DEB982] p-10 pb-32 rounded text-center space-y-5">
          <h3 className="font-semibold font-mono text-4xl text-[#6B4200]">
            Dropdowns
          </h3>

          {/* DROPDOWN */}

          <Dropdown
            label="Select Animal Type"
            options={animalOptions}
            value={selectedValues.animalType}
            onChange={(value) => handleSelectChange("animalType", value)}
          />
          <Dropdown
            label="Select symptom 1"
            options={symptom1Options}
            value={selectedValues.symptom1}
            onChange={(value) => handleSelectChange("symptom1", value)}
          />
          <Dropdown
            label="Select symptom 2"
            options={symptom2Options}
            value={selectedValues.symptom2}
            onChange={(value) => handleSelectChange("symptom2", value)}
          />
          <Dropdown
            label="Select symptom 3"
            options={symptom3Options}
            value={selectedValues.symptom3}
            onChange={(value) => handleSelectChange("symptom3", value)}
          />
          <Dropdown
            label="Select symptom 4"
            options={symptom4Options}
            value={selectedValues.symptom4}
            onChange={(value) => handleSelectChange("symptom4", value)}
          />
          <Dropdown
            label="Select symptom 5"
            options={symptom5Options}
            value={selectedValues.symptom5}
            onChange={(value) => handleSelectChange("symptom5", value)}
          />

          <button onClick={handleSubmit}>Check</button>
          {/* 
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="w-full bg-[#F6F1F1] text-[#B3791D] text-lg font-semibold py-3 px-4 rounded flex items-center justify-between"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Select Animal Type
              <div>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z" />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="absolute z-10 w-full mt-2 rounded-md shadow-lg bg-white">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {menuItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="block text-md font-semibold py-2 text-[#B3791D] hover:bg-[#DEB982] hover:text-white"
                      role="menuitem"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div> */}
        </div>

        {/* INFO section */}
      </section>
      <Footer />
    </>
  );
}
