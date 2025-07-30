import React from "react";
import BrandLogo from "./brand.logo.block.component";

function Brand() {
  return (
    <div className="flex flex-row items-center select-none cursor-pointer justify-center gap-3 p-[11px]" >
      <BrandLogo classname="w-[30px]" />
      <div className="flex flex-row items-center justify-center gap-1" >
        <span className="font-figtree font-semibold text-2xl" >Oxygen</span>
        <span className="font-figtree font-light text-2xl">console</span>
      </div>
    </div>
  );
}

export default Brand;
