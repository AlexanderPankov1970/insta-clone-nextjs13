import Image from "next/image";
import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { HiOutlineHeart, HiOutlineChat } from "react-icons/hi";
import { GiBookmark } from "react-icons/gi";

export default function Post({ id, img, username, caption, userImg }) {
  return (
    <div className="bg-white mt-4 border-2 rounder-md">
      {/* Post Header*/}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          alt={username}
          width={50}
          height={50}
          className="rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-auto">{username}</p>
        <BiDotsHorizontalRounded className="" />
      </div>
      {/* Post Image */}
      <Image
        src={img}
        alt={"Photo"}
        width={450}
        height={450}
        className="object-cover w-full"
      />
      {/* Post Buttons */}
      <div className="flex justify-between px-2 m-4">
        <div className="flex justify-between px-4 space-x-6">
          <HiOutlineHeart className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
          <HiOutlineChat className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
        </div>
        <GiBookmark className="btn" />
      </div>
    </div>
  );
}
