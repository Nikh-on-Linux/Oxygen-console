"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "../ui/input.ui";
import { Button } from "../ui/button";

function FolderCreateDialogue() {
  const router = useRouter();
  const pathname = usePathname();
  const searchparam = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (searchparam.has("cf")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchparam]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        router.push(pathname);
      }}
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="gap-6">
        <DialogHeader>
          <DialogTitle className="font-sans" >Create a new Folder</DialogTitle>
          <DialogDescription className="font-sans font-medium text-secondary-foreground" >
            A folder will be created in the current path.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          <Input placeholder="e.g, cartoon notebooks" className="font-sans" />
        </div>
        <DialogFooter className="flex w-full flex-row items-center justify-end">
          <Button onClick={()=>{
            router.push(pathname);
          }} variant={"default"} className="w-full font-sans font-medium" size={'lg'}  >Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FolderCreateDialogue;
