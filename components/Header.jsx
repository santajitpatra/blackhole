import React from "react";
import Image from "next/legacy/image";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux";
import { selectItems } from "@/redux/slices/basketSlice";


const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  
  return (
    <header>
      <div className="flex items-center bg-primary flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/BLACKHOLE.png"
            alt="Picture of the author"
            width={200}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 cursor-pointer rounded-md flex-grow bg-cyan-400 hover:bg-cyan-600">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
          />
          <SearchIcon className="m-3 h-12" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="md:text-sm font-extrabold ">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="md:text-sm font-extrabold ">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link flex relative items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-cyan-400 text-center text-black font-bold rounded-full">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline md:text-sm font-extrabold mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* <!-- ==================== menu button  ====================  -->  */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-primary-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Blackhole bigTV</p>
        <p className="link">Best Sellers</p>
        <p className="link">Mobiles</p>
        <p className="link hidden lg:inline-flex">Customer Service</p>
        <p className="link hidden lg:inline-flex">Today&apos;s Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Amazon Pay</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Fashion</p>
        <p className="link hidden lg:inline-flex">Home & Kitchen</p>
        <p className="link hidden lg:inline-flex">New Releases</p>
        <p className="link hidden lg:inline-flex">Beauty & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
