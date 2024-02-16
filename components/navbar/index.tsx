import { CurrenyData, LangulageData } from "@/constrains/data";
import { Routes } from "@/constrains/routes";
import { SelectItem, Select } from "@tremor/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function NavBar() {
  return (
    <div className="w-8/12 mx-auto flex justify-between items-center border-b-2">
      <div className="w-5/12 flex justify-between text-gray-500 capitalize text-xs font-normal gap-x-px">
        <div className="w-2/4 flex justify-between  items-center  gap-x-0   ">
          {Routes.map((route, index) => {
            return (
              <Link href={"/" + route.name} className="font-normal" key={index}>
                {route.name}
              </Link>
            );
          })}
        </div>
        <div className="w-2/4 pl-2 ml-2  border-l-2 ">
          We deliver to you every day from{" "}
          <span className=" text-orange-600 font-bold">7:00 to 23:00</span>
        </div>
      </div>
      <div className="w-4/12 flex justify-between ">
        <Select defaultValue="EN" children={LanguageSelectItem()} />
        <Select defaultValue="USD" children={CurrnecySelectItem()} />
      </div>
    </div>
  );
}
const LanguageSelectItem = (): ReactNode[] => {
  return LangulageData.map((language) => (
    <SelectItem key={language} value={language} />
  ));
};
const CurrnecySelectItem = (): ReactNode[] => {
  return CurrenyData.map((currency) => (
    <SelectItem key={currency} value={currency} />
  ));
};
