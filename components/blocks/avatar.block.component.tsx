"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarBlock() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-row items-center gap-3 py-1 px-2 rounded-md" >
      <Avatar className="w-7 h-7">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="bg-muted-foreground rounded-full relative w-30 h-1" >
        <div className="rounded-full bg-secondary-foreground w-[40%] h-1" ></div>
      </div>
      <span className="font-sans text-sm text-secondary-foreground" ><b>40%</b> occupied</span>
    </div>
  );
}

export default AvatarBlock;
