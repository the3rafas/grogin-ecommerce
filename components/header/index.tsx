import { staticPolicyData } from "@/constrains/data";
import useGetImage from "@/utils/use-image";
import {
  RiMapPinLine,
  RiUser3Line,
  RiHeartLine,
  RiShoppingCartLine,
} from "@remixicon/react";
import Image from "next/image";
import SearchInput from "../search input";
import { Icon } from "@tremor/react";

export default function Header() {
  return (
    <div className=" w-8/12 mx-auto flex flex-col justify-evenly gap-6 py-4">
      <div className="flex flex-col gap-x-4 justify-between w-full items-center border-b-2">
        <div className="flex justify-between w-full gap-x-4 items-center">
          <div className="flex justify-between w-1/5 items-center">
            <div>
              <Image
                src={useGetImage({ src: "logo-dark.png", dir: "header" })}
                alt="logo"
                width={142}
                height={34}
              />
            </div>
            <div className="flex  gap-x-2 items-center">
              <RiMapPinLine />
              <div>
                Deliver to <span className="text-bold block">all</span>
              </div>
            </div>
          </div>
          <div className="w-3/5 ">
            <SearchInput />
          </div>
          <div className="w-1/5 flex justify-evenly items-center">
            <div className="flex gap-x-2 items-center">
              <RiUser3Line />
              <div>
                <div>Sign In</div>
                <div>Account</div>
              </div>
            </div>
            <div>
              <RiHeartLine />
            </div>
            <div>
              <RiShoppingCartLine />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full  items-center h-12">
          <div className="w-80 bg-green-500">All Categories</div>
          <div className="w-2/3 flex justify-between">
            <div className="flex  w-3/6 justify-between">
              <div>Home</div>
              <div>Shop</div>
              <div>Fruits & Vegetables</div>
              <div>Beverages</div>
              <div>Blog</div>
              <div>Contact</div>
            </div>
            <div className="flex w-2/6 justify-between">
              <div>Trending Products</div>
              <div>
                Almost Finished
                <span>SALE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 justify-between w-full">
        <div>
          <div className="w-3/12 h-60"></div>
        </div>
        <div className="w-8/12">
          <img
            src={useGetImage({ src: "div.slick-list.png", dir: "header" })}
            width="1034"
            height="482.42"
            alt="hero"
          />
        </div>
      </div>
      <div className="flex gap-x-px">
        {staticPolicyData.map((policy, index) => (
          <div className="flex-1 w-1/4 flex gap-3 h-24" key={index}>
            <div className="self-end">
              {" "}
              <Image
                width="70"
                height="70"
                src={useGetImage({ src: policy.image, dir: "header" })}
                alt={policy.heading}
              />
            </div>
            <div>
              <h1 className="font-bold text-base">{policy.heading}</h1>
              <p className="text-gray-500 capitalize text-xs">
                {policy.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
