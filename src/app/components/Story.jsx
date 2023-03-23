import Image from "next/image";
import React from "react";

export default function Story({ userName, img }) {
  return (
    <div className="">
      <Image
        src={img}
        alt={userName}
        width={50}
        height={50}
        className="rounded-full"
      />
      <p>{userName}</p>
    </div>
  );
}
