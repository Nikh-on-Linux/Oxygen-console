"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadFileCloud from "../icons/upload.file.icons.component";

function FileUpload() {
    const [isOpen,setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(()=>{
        searchParams.has('upfi') ? setIsOpen(true) : setIsOpen(false);
    },[searchParams])
  return (
    <Dialog open={isOpen} onOpenChange={()=>{router.push(pathname)}}>
      <DialogTrigger></DialogTrigger>
      <DialogContent onPointerDownOutside={()=>{setIsOpen(true)}} >
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
          <DialogDescription>
            you can upload single or multiple files in here.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col py-4 items-center border-2 border-border rounded-xl border-dashed h-40" >
            <UploadFileCloud  className="w-8 h-8 text-secondary-foreground"/>
            <span className="mt-2 text-muted-foreground text-sm font-sans font-semibold" >Drag & Drop files to upload</span>
            <span className="text-xs mt-4 text-muted-foreground font-sans font-semibold" >Or</span>
            <input type="file" className="mt-4 outline-none text-secondary-foreground font-sans font-semibold text-center" />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FileUpload;
