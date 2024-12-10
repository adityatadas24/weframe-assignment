"use client";

import React from "react";
import { article } from "../articleData";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
const Articles = () => {
  const scrollContainer = (direction) => {
    const container = document.getElementById("scrollContainer");
    const scrollAmount = 300;

    if (container) {
      if (direction === "next") {
        container.scrollLeft += scrollAmount;
      } else if (direction === "prev") {
        container.scrollLeft -= scrollAmount;
      }
    }
  };

  return (
    <div className="container mx-auto w-full flex justify-center items-center flex-col">
      <div className=" mx-6 w-[97%] flex justify-between items-center mb-4">
        <p className="text-3xl font-cabinet max-md:text-lg font-bold">
          Articles similaires
        </p>
        <p className="text-sm max-md:text-[8px] f text-gray-700 underline  font-medium">
          VOIR TOUTE LA COLLECTION
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <button
          onClick={() => scrollContainer("prev")}
          className=" transform -translate-y-1/2 bg-[#5cd2dc] text-white p-2"
        >
          <FaArrowLeft />
        </button>
        <div
          id="scrollContainer"
          className="flex justify-start items-center gap-2 w-[97%] overflow-x-scroll scrollbar-hide"
        >
          {article.map((item) => (
            <div
              key={item.id}
              className="flex-none w-1/5 max-md:w-11/12 gap-2 mb-4 p-2"
            >
              <div className="bg-[#f7f6f4] p-3">
                <div className="flex justify-between items-center">
                  <CiHeart className="text-2xl" />
                  <p className="text-[8px] font-bold bg-white w-fit p-1">
                    {item.table}
                  </p>
                </div>
                <Image
                  className="mb-6 mt-4"
                  src="/articletable.png"
                  width="300"
                  height="300"
                  alt="img"
                />
              </div>
              <div className="w-full p-1">
                <div className="flex justify-between items-center mt-2 mb-1">
                  <p className="text-2xl font-medium font-playfair">
                    {item.title}
                  </p>
                  <p className=" flex items-start text-base font-semibold">
                    {item.price}
                    <span className="text-[14px] font-semibold">€</span>
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 text-[10px]">
                    {item.pieceprice} . {item.ref}
                  </p>
                  <p className="p-1 px-2 text-[11px] font-semibold bg-slate-200 w-fit rounded-xl">
                    {item.pieces}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollContainer("next")}
          className=" transform -translate-y-1/2 bg-[#5cd2dc] text-white p-2"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Articles;