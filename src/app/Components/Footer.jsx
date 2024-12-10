import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container mx-auto w-full flex justify-center items-start h-96">
        <div className=" mx-4 flex justify-between items-center w-11/12 max-md:flex-col">
      <div  className="flex justify-start items-center w-4/5 gap-10 flex-wrap mb-4">
        <Image
          className="mr-16"
          src="/logo.png"
          width="100"
          height="100"
          alt="logo"
        />
        <div>
          <ul className="text-sm max-md:text-[8px]">
            <li className="font-bold text-lg mb-1 max-md:text-[10px]">INFOS PRATIQUES</li>
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d’emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm max-md:text-[8px]">
            <li className="font-bold text-lg mb-1 max-md:text-[10px]">LÉGAL</li>
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div>
          <ul className="text-sm max-md:text-[8px]">
            <li className="font-bold text-lg mb-1 max-md:text-[10px]">MON COMPTE</li>
            <li>Accéder à mon compte</li>
            <li>Ma liste d’envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>
      </div>
      <div className="w-1/5 flex justify-end items-center flex-col gap-2">
        <p className="font-bold">NOUS SUIVRE</p>
        <div className="flex justify-start items-center gap-2">
          <Image
            className=" hover:bg-slate-300 cursor-pointer "
            src="/twitter.png"
            width="20"
            height="20"
            alt="logo"
          />
          <Image
            className=" hover:bg-slate-300 cursor-pointer "
            src="/instagram.png"
            width="20"
            height="20"
            alt="logo"
          />
          <Image
            className=" hover:bg-slate-300 cursor-pointer "
            src="/linkedin-in.png"
            width="20"
            height="20"
            alt="logo"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
