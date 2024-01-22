"use client";
import { CustombuttonProps } from "@/types";
import Image from "next/image";

function CustomButton({
  title,
  containerStyles,
  handelClick,
  btnType,
  textStyle,
  rightArrow,
}: CustombuttonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} `}
      onClick={handelClick}
    >
      <span className={`flex-1 ${textStyle} `}>{title}</span>
      {rightArrow && (
        <Image
          src={rightArrow}
          width={20}
          height={20}
          className=" object-contain"
          alt="right arrow"
        />
      )}
    </button>
  );
}

export default CustomButton;
