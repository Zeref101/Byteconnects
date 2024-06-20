"use client";
import React from "react";
import { Button } from "../ui/button";
import { CustomAuthProps } from "@/types";
import Image from "next/image";

const CustomAuth = ({
  name,
  image,
  redirectUrl,
  signingMethod,
  handleClick,
}: CustomAuthProps) => {
  return (
    <Button
      className=" bg-transparent w-1/2 text-white border flex gap-2 justify-center items-center hover:bg-[#e8e9e98d] hover:border-[#9747ff] rounded-md text-[14px] font-semibold leading-[25.2px]"
      onClick={() => {
        console.log("Hemlo");
        handleClick();
      }}
    >
      <Image
        src={image}
        alt={name}
        width={24}
        height={24}
        className={`${name === "Apple" ? "invert" : ""}`}
      />
      <span className="">
        Sign {signingMethod} with {name}
      </span>
    </Button>
  );
};

export default CustomAuth;
