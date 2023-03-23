import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className=" relative hidden sm:inline cursor-pointer">
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
        <h1>Right sides</h1>
      </div>

      {/* Middle */}

      {/* Right */}

      {/* <h1 className="text-red-500">Header</h1> */}
    </div>
  );
}
