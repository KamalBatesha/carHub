"use client";
import Image from "next/image";
import { CustomButton } from ".";
function Hero() {
  const handelScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          find , booh or rent a car _ quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* <p className="bg-primary-blue text-white rounded-full mt-10" */}
        <CustomButton
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          title="Explore cars"
          handelClick={handelScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

export default Hero;
