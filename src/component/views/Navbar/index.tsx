"use client";
import { NavbarArray, NavbarItemType } from "@/component/utilis/NavArrayTypes";
import { BiSearch } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import DropDown from "../subcomponents/DropDown";
import { useState } from "react";
import Expand from "../subcomponents/Expand";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [cardItemNumber, isCardItemNumber] = useState<number>(0);
  const [searchQuery, setsearchQuery] = useState("");
  const router = useRouter();

function handleSerachCalledFunc(e:any) {
   if(e.key === "Enter" && e.keyCode === 13) {
    router.push(`/search/${searchQuery}`);
   }
}

  return (
    <div>
      <div className="sticky top-0 backdrop-blur-lg bg-opacityDownColor py-6 flex items-center justify-between">
        <div className="w-36 flex-shrink-0">
          <Image src={"/Logo.webp"} alt="Logo" width={500} height={500}></Image>
        </div>
        <div className="hidden lg:flex justify-between items-center space-x-12">
          <ul className="flex space-x-4 font-medium text-lg text-purple-950">
            {NavbarArray.map((item: NavbarItemType, index: number) => (
              <li
                key={index}
                className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group"
              >
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? (
                  <HiOutlineChevronDown
                    className="mt-1 -rotate-180 group-hover:rotate-0 duration-300"
                    size={15}
                  />
                ) : (
                  ""
                )}
                {item.isDropDown && (
                  <div
                    className={`invisible group-hover:visible absolute top-8 left-0 py-2 px-6 bg-gray-100 font-light min-w-[7.8rem]`}
                  >
                    <DropDown item={item} />
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="border flex items-center text-gray-600 px-3 rounded-md">
            <Link href={`/search/${searchQuery}`}>
              <BiSearch />
            </Link>
            <input
              type="text"
              value={searchQuery}
              onKeyDown={handleSerachCalledFunc}
              onChange={(e) => setsearchQuery(e.target.value)}
              className="pl-1 pr-5 py-1 w-80 flex-grow focus:outline-none"
              placeholder="What are you looking for?"
            />
          </div>
          <div className="relative flex-shrink-0 w-11 h-11 flex bg-gray-300 rounded-full items-center justify-center">
            <div
              className="absolute w-4 h-4 bg-red-400 top-1 text-xs rounded-full font-light
                                flex items-center justify-center right-0"
            >
              {cardItemNumber}
            </div>
            <BsFillCartCheckFill size={25} />
          </div>
        </div>

        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
          {isNavbarOpen ? (
            <div className="flex lg:hidden">
              <IoMdClose size={25} />
            </div>
          ) : (
            <div className="flex lg:hidden">
              <GiHamburgerMenu size={25} />{" "}
            </div>
          )}
        </div>
      </div>
      {isNavbarOpen && <Mobilenav />}
    </div>
  );
};

export default Navbar;

const Mobilenav = () => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="w-full px-6 py-4 bg-grey-100">
      {NavbarArray.map((item: NavbarItemType, index: number) => (
        <Expand key={index} item={item} />
      ))}
    </div>
  );
};
