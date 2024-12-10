import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="container mx-auto flex justify-center items-center w-full mb-10 mt-6 flex-col ">
        
        <div className="flex justify-center items-center flex-col gap-6">
          <div className="text-center">
            <p className="text-2xl font-semibold max-md:text-lg">
              On s’occupe de <span className="text-blue-400">tout</span>
            </p>
            <p className="text-sm text-gray-400 max-sm:text-[8px]">
              Office ipsum you must be muted. It meeting commitment busy pain.
            </p>
          </div>
          <Image
            className="mb-6 mt-4 max-md:hidden"
            src="/syb.png"
            width="800"
            height="500"
            alt="img"
          />
        </div>
       
        <div className="flex justify-center items-center w-11/12 gap-6 max-md:flex-col mt-8">
          <Image
            className="mb-6 mt-4 w-full h-60"
            src="/image.png"
            width="100"
            height="100"
            alt="img"
          />
          <div className="bg-[#fff2f9] p-5 w-full flex justify-start items-center flex-col gap-4 rounded-2xl ">
            <p className="text-3xl font-semibold ">
              S'inscrire & economiser{" "}
              <span className="text-3xl text-blue-400">10%</span>
            </p>
            <p className="twxt-[8px] text-gray-400 max-sm:text-[8px]">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn't. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div className="flex justify-center items-center gap-4 w-full">
              <input type="email" name="email" placeholder="john@doe.com" className="bg-white w-3/4 p-3"/>
              <button className="w-1/5 p-3 px-6 bg-[#5cd2dc] text-start text-white rounded-md max-sm:text-[8px]">
                S'INSCRIRE{" "}
              </button>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Profile;
