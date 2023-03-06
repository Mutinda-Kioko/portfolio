import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "../icons/CloseIcon";
import HumbergerIcon from "../icons/HumbergerIcon";
import LogoIcon from "../icons/LogoIcon";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full bg-[#282C33] shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link href="#">
              <div className="flex flex-row items-center">
                <LogoIcon />
                <h4 className="p-2 font-Fira text-2xl font-bold text-white">
                  Kiokokioko
                </h4>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <CloseIcon /> : <HumbergerIcon />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="font-Fira ">
                <Link href="#" className="flex flex-row items-center">
                  <p className="text-[#C778DD] hover:text-[#ABB2BF]">#</p>
                  <p className="text-[#ABB2BF] hover:text-white">home</p>
                </Link>
              </li>
              <li className="font-Fira ">
                <Link href="#" className="flex flex-row items-center">
                  <p className="text-[#C778DD] hover:text-[#ABB2BF]">#</p>
                  <p className="text-[#ABB2BF] hover:text-white">works</p>
                </Link>
              </li>
              <li className="font-Fira ">
                <Link href="#" className="flex flex-row items-center">
                  <p className="text-[#C778DD] hover:text-[#ABB2BF]">#</p>
                  <p className="text-[#ABB2BF] hover:text-white">about-me</p>
                </Link>
              </li>
              <li className="font-Fira ">
                <Link href="#" className="flex flex-row items-center">
                  <p className="text-[#C778DD] hover:text-[#ABB2BF]">#</p>
                  <p className="text-[#ABB2BF] hover:text-white">contacts</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
