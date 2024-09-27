import { Link, NavLink } from "react-router-dom";
import pawsitiveLogo from "../assets/pawsitive.png";
import MobileNav from "./MobileNav";
const NavbarData = {
  navLinks: [
    { name: "Home", link: "/" },
    { name: "About", link: "/#about" },
    { name: "Contact", link: "/#faqs" },
  ],
  mainLinks: [
    { name: "Register", link: "/signup" },
    { name: "Login", link: "/login" },
  ],
};

export default function AuthNav() {
  return (
    <nav className="w-full fixed z-30 px-3 lg:px-10 flex justify-center items-center backdrop-blur-md">
      <div className="w-full h-[60px] flex justify-between items-center font-semibold text-base ">
        <Link
          to={"/"}
          className="flex justify-center items-center gap-2 p-1 rounded-md"
        >
          <img src={pawsitiveLogo} alt="logo" className="w-[200px] mt-2" />
        </Link>

        <div className="hidden md:flex justify-center items-center gap-2 lg:gap-5 bg-white shadow-2xl text-sm lg:text-base p-1.5 px-2 rounded-full">
          {NavbarData.navLinks.map((navLink, index) => (
            <NavLink
              key={index}
              href={navLink.link}
              onClick={() => handleOnClick(navLink.link)}
              className={`${"bg-white text-[#B3791D] hover:bg-[#B3791D] hover:text-white"}  w-[80px] lg:w-[100px] text-center  p-1.5 px-2 rounded-full hover:text-primary duration-300`}
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-2">
          {NavbarData.mainLinks.map((mainLink, index) => (
            <Link
              key={index}
              to={mainLink.link}
              className="w-28 hidden md:flex justify-center items-center gap-2 bg-[#B3791D] text-white hover:text-white p-2 px-4 rounded-full"
            >
              {mainLink.name}
            </Link>
          ))}
        </div>
      </div>
      <MobileNav />
    </nav>
  );
}
