"use client"
import { oneProductType } from "@/component/utilis/ProductsType";
import { cartContext } from "@/global/Context";
import Image from "next/image";
import { FC, useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { client } from "../../../../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoadingComp from "../../../shared/Wrapper/LoadingComp";
import { setTimeout } from "timers";

const builder: any = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CartComp = ({  allProductsOfStore,}: {  allProductsOfStore: Array<oneProductType>;}) => {
  const [allProductsForCart, setAllProductsForCart] = useState<Array<any>>([]);

  useEffect(() => {
    let stateStorage : any= localStorage.getItem("cart") as string;
    stateStorage = JSON.parse(stateStorage);

    if (stateStorage) {
      let data = allProductsOfStore.filter((item:oneProductType)=> {
        for (let index = 0; index < stateStorage.length; index++) {
          const element = stateStorage[index];
          if(element.productId === item._id) {
            return true;
          }
        }
      })
      setAllProductsForCart(data)
    }
  }, [])
  
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="py-6">
        <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col basis-9/12 gap-2">
          {allProductsForCart.map((item: oneProductType, index: number) => {
            return (
              <div className="flex flex-shrink-0 gap-6">
                <div className="w-[16rem]">
                  <Image
                    className="rounded-xl"
                    width={1000}
                    height={1000}
                    src={urlFor(item.image[0]).width(1000).height(1000).url()}
                    alt={item.image[0].alt}
                  />
                </div>

                <div className="space-y-3 w-full">
                  <div className="flex justify-between">
                    <h2 className="md:text-2xl text-3sxl font-light text-gray-700">
                      {item.productName}
                    </h2>
                    <RiDeleteBin6Line size={26} />
                  </div>
                  <p className="font-medium text-gray-800">
                    {item.productTypes[0]}
                  </p>
                  <h3 className="text-sm md:text-base">Delivery Estimation</h3>
                  <h4 className="text-orange-400 font-semibold md:text-xl">
                    5 Working Days
                  </h4>
                  <div className="flex justify-between">
                    <p className="font-semibold md:text-lg">
                      {"$"}
                      {item.price}.00
                    </p>
                    <div className={`flex gap-2 items-center text-lg`}>
                      <button className="select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
                        -
                      </button>
                      <p>5</p>
                      <button className="border select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full  border-gray-800">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="basis-1/4 space-y-6 px-6">
          <h6 className="font-semibold text-xl">Order Summary</h6>
          <div className="flex justify-between">
            <p className="text-lg font-light">Quantity:</p>
            <p>4 Products</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-light">Subtotal:</p>
            <p>$1500.00</p>
          </div>
          <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
            Process to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartComp;

