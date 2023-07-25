import { mainImage } from "@/component/assests";
import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";

const Main = () => {
  const btnText = "Start \n Shopping";
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="space-y-7 max-w-[24rem]">
        <button className="px-4 py-2 bg-primaryWhite rounded-md text-purple-900 font-medium">
          Sales 70%
        </button>
        <h1 className="text-5xl text-gray-800 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p>
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button
          className="bg-gray-900 px-5 py-3 text-lg text-white font-semibold rounded-sm ring-1 
                                    ring-slate-800 flex gap-2 items-center "
        >
          <BsCart2 size={24} />
          <p className="whitespace-pre-line leading-4">{btnText}</p>
        </button>
        <div className="flex gap-4">
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"
              }
              alt="bazaar"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"
              }
              alt="baztel"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"
              }
              alt="versase"
            />
          </div>
          <div className="w-14 md:w-28">
            <Image
              width={100}
              height={100}
              src={
                "https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"
              }
              alt="in style"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex bg-primaryWhite rounded-full">
        <Image src={mainImage} alt="mainImage" />
      </div>
    </div>
  );
};

export default Main;
