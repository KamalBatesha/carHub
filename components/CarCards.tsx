"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils/indenx";
import { CarDetails, CustomButton } from ".";

interface CarCardProps {
  car: CarProps;
}
function CarCards({ car }: CarCardProps) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" transition-all duration-500 hover:border  group flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-lg hover:scale-110 rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="text-[22px] leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
      </div>
      <p className="mt-6 font-extrabold text-[32px] flex">
        <span className="text-[14px] font-semibold self-start">$</span>
        {carRent}
        <span className="text-[14px] font-medium self-end">/day</span>
      </p>

      <div className=" relative w-full h-40 my-4 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          fill
          priority
          className="object-contain mx-auto"
          alt="car image"
        />
      </div>
      <div className=" relative flex mt-2 w-full">
        <div className=" flex group-hover:invisible justify-between text-gray-900 w-full">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src=" /steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className=" text-[14px]">
              {transmission === "a" ? "Auttomatic" : "manual"}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src=" /tire.svg" width={20} height={20} alt="tire" />
            <p className=" text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src=" /gas.svg" width={20} height={20} alt="gas" />
            <p className=" text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10  ">
          <CustomButton
            containerStyles=" w-full py-[16px] bg-primary-blue rounded-full hover:opacity-95 transition-all"
            textStyle=" text-white text-[14px] leading-[17px] font-blod"
            title="View More"
            rightArrow="/right-arrow.svg"
            handelClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} close={() => setIsOpen(false)} car={car} />
    </div>
  );
}

export default CarCards;
