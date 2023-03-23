import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div className=" relative hidden sm:inline cursor-pointer m-3">
        <Image
          src={
            "https://www.nftgators.com/wp-content/uploads/2022/03/Instagram-.jpg"
          }
          alt={"Logo Instagram"}
          // layout="full"
          // className="object-contain "
          width={160}
          height={160}
        />
      </div>
      <div className="relative sm:hidden cursor-pointer m-6">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          }
          alt={"Image Instagram"}
          width={50}
          height={50}
        />
      </div>
      <div className="relative ">
        <div className="absolute">
          <SearchIcon className="h-5 text-gray-500 mt-2 ml-3" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="pl-10 bg-gray-50 border-gray-500 text-sm  focus:ring-black focus:border-black rounded-lg"
        />
      </div>
      <h1>Right sides</h1>
    </div>
  );
}
