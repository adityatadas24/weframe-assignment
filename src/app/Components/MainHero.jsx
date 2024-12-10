import React from "react";

import Image from "next/image";
import { CiHeart } from "react-icons/ci";
const MainHero = () => {

  return (
    <div className="mx-6 mt-28 flex justify-center items-center mb-16 flex-col">
      <div className="font-semibold text-right mb-2">Home - <span className="text-gray-400">Art de la table</span></div>
      <div className="flex justify-start items-start w-full gap-4 max-lg:flex-col">
        <div className="flex flex-col w-full">
          <div className="flex bg-[#f7f6f4] p-4 w-full">
            <div className="mr-8">
              <Image src="/Table1.png" width="40" height="40" alt="" />
              <Image src="/Table2.png" width="40" height="40" alt="" />
              <Image src="/Table2.png" width="40" height="40" alt="" />
              <Image src="/Table2.png" width="40" height="40" alt="" />
            </div>
            <div className="ml-4">
              <Image src="/machines.png" width="500" height="400" alt="" />
            </div>
          </div>
          <div className="w-full mt-4">
            <h3 className="text-2xl mb-2">Description produit</h3>
            <p className="text-gray-500 text-sm">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h3 className="font-playfair text-[30px] font-medium">
              Cheese – appareil à raclette 1/2 roue
            </h3>
            <CiHeart className="text-3xl" />
          </div>
          <p className="font-sans font-semibold text-xl">
            39,50€
            <span className="text-[10px] text-gray-400 font-semibold">
              /peice
            </span>
          </p>
          <hr className="w-full border-1 border-gray mt-2 mb-2" />
          <div className="flex justify-between items-center">
            <div className="flex  gap-3">
              <Image src="/Vector.png" width="25" height="25" alt="" />
              <p>20cm</p>
              <Image src="/Frame.png" width="25" height="25" alt="" />
              <p>50cm</p>
            </div>
            <p className="text-[12px] text-gray-400 font-semibold">
              REF:VABGN5
            </p>
          </div>
          <hr className="w-full border-1 border-gray mt-2 mb-3" />
          <div className="text-gray-500 max-lg:text-sm h-72">
            <p>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </p>
            <p>Réglable en hauteur </p>
            <p>Appareil à raclette professionnel </p>
            <p>Boîtier dechauffe horizontal réglable en hauteur</p>
            <br />
            <p>200V</p>
            <p>900W</p>
          </div>
          <hr className="w-full border-1 border-gray mt-2 mb-3" />

          <div className=" flex justify-between items-center w-full gap-4">
            <div className="flex justify-between items-center text-center border-2 w-1/5 p-2 px-2 gap-6 rounded-lg">
              <button className="hover:bg-slate-300">-</button>
              <p>1</p>
              <button className="hover:bg-slate-300">+</button>
            </div>
            <div className="w-4/5 text-center font-semibold bg-[#5cd2dc] rounded-md text-white p-2">
              AJOUTER AU PANIER
            </div>
          </div>
          <div className="w-full mt-10">
            <div className="flex justify-between items-center p-4 bg-[#fbfaf8]">
              <p className="text-sm font-semibold">LIVRAISONS</p>
              <p className="text-lg font-semibold">+</p>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#fbfaf8]">
            <p  className="text-sm font-semibold">QUESTIONS</p>
            <p className="text-lg font-semibold">+</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
