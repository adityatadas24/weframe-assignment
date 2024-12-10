import React from "react";
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { TfiLightBulb } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <div className="fixed z-0 mt-4 container flex justify-center items-center w-full flex-col max-md:mt-2 mb-20">
      <div className=" flex justify-start items-center gap-8 w-11/12 max-md:gap-2 max-lg:gap-4">
        <Image className="mr-14 max-md:w-14 max-sm:w-6 max-md:mr-2" src='/logo.png' width='90' height='90' alt="logo" />
        <div className="flex justify-center items-center bg-gray-100 p-3 w-2/5 mr-32 max-md:mr-6 max-sm:mr-2">
          <input
            className="border border-none bg-transparent w-full active:border-0 max-md:hidden"
            type="text"
            placeholder="Reachercher un produit"
          />
          <CiSearch />
        </div>
        <div className="flex justify-center items-center gap-2 max-md:text-[10px] max-sm:text-[8px]">
          <TfiLightBulb />
          <p>Inspiration</p>
        </div>
        <div className="flex justify-center items-center gap-2 max-md:text-[10px] max-sm:text-[8px]">
          <CiHeart />
          <p>MesFavoris</p>
          <p className="bg-slate-300 text-[11px] px-2 rounded-lg max-md:text-[10px] max-sm:text-[8px]">24</p>
        </div>
        <div className="flex justify-center items-center text-white gap-2 bg-[#0193cf] p-2 px-4 rounded-md max-md:text-[10px] max-sm:text-[8px] max-md:px-0 max-md:p-1 max-md:gap-1">
          <CiShoppingCart />
          <p>Panier</p>
        </div>
        <p className="bg-slate-300 w-9 h-9 rounded-full max-lg:hidden"></p>
        <div className="flex justify-center items-center gap-2 max-md:text-[8px]">
          <p>FR</p>
          <IoIosArrowDown />
        </div>
      </div>

<div className="flex justify-center items-center gap-10 font-semibold text-[14px] w-11/12 text-gray-500
 mt-2 max-lg:overflow-x-scroll max-lg:flex-nowrap max-lg:w-full max-lg:justify-start max-sm:text-[10px] max-sm:gap-4 whitespace-nowrap scrollbar-hide">        
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600 " href="#">ART DE LA TABLE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">MOBILIER</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">NAPPAGE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">MATERIEL</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">CUSINE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">BARBECUE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">TENTE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">CHAUFFAGW</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">PODIUM-OISTE DE DANSE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">SON ET LUMERE</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">PACKS</a>
        <a className="active:text-blue-600 focus:text-blue-600 focus:border-b-2 border-blue-600" href="#">CONSOMMABLES</a>
      </div>
      <hr className="w-full border-1 border-gray" />
    
    </div>
  );
};

export default Header;
