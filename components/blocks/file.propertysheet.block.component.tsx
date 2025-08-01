"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function FilePropertyBlock() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  useEffect(() => {
    if (searchparams.has("fp")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchparams]);

  return (
    <Sheet open={isOpen} onOpenChange={()=>{router.push(pathname)}} >
      <SheetTrigger></SheetTrigger>
      <SheetContent side="right" >
        <SheetHeader>
          <SheetTitle>File properties</SheetTitle>
          <SheetDescription>
            File property for Public folder
          </SheetDescription>
        </SheetHeader>
        <div>
          
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default FilePropertyBlock;
