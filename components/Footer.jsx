import React from "react";
import Image from "next/legacy/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between px-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3">Get to Know Us</h3>
            <a href="#" className="hover:text-white mb-2">
              About Us
            </a>
            <a href="#" className="hover:text-white mb-2">
              Careers
            </a>
            <a href="#" className="hover:text-white mb-2">
              Press Releases
            </a>
            <a href="#" className="hover:text-white">
              Blackhole Cares
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-3">Make Money with Us</h3>
            <a href="#" className="hover:text-white mb-2">
              Sell on Blackhole
            </a>
            <a href="#" className="hover:text-white mb-2">
              Sell Under Blackhole Accelerator
            </a>
            <a href="#" className="hover:text-white mb-2">
              Become an Affiliate
            </a>
            <a href="#" className="hover:text-white">
              Advertise Your Products
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-3">
              Blackhole Payment Products
            </h3>
            <a href="#" className="hover:text-white mb-2">
              Blackhole Business Card
            </a>
            <a href="#" className="hover:text-white mb-2">
              Shop with Points
            </a>
            <a href="#" className="hover:text-white mb-2">
              Reload Your Balance
            </a>
            <a href="#" className="hover:text-white">
              Blackhole Currency Converter
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-3">Let Us Help You</h3>
            <a href="#" className="hover:text-white mb-2">
              Blackhole and COVID-19
            </a>
            <a href="#" className="hover:text-white mb-2">
              Your Account
            </a>
            <a href="#" className="hover:text-white mb-2">
              Your Orders
            </a>
            <a href="#" className="hover:text-white mb-2">
              Shipping Rates &amp; Policies
            </a>
            <a href="#" className="hover:text-white">
              Returns &amp; Replacements
            </a>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/BLACKHOLE.png"
              alt="Picture of the author"
              width={200}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
            <span className="ml-2">
              &copy; {currentYear} Blackhole. All rights reserved.
            </span>
          </div>
          <div className="flex">
            <a href="#" className="mr-4 hover:text-white">
              Privacy Notice
            </a>
            <a href="#" className="mr-4 hover:text-white">
              Conditions of Use
            </a>
            <a href="#" className="mr-4 hover:text-white">
              Interest-Based
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
