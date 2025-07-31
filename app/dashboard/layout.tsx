"use client";
import React from "react";
import Sidebar from "@/components/blocks/sidebar.block.component";
import Input from "@/components/ui/input.ui";
import SearchIcon from "@/components/icons/search.icons.component";
import AvatarBlock from "@/components/blocks/avatar.block.component";
import BellIcon from "@/components/icons/bell.icons.component";
import { Button } from "@/components/ui/button";
import DriveIcon from "@/components/icons/drive.icons.component";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import OnedriveIcon from "@/components/icons/onedrive.icons.component";
import Link from "next/link";
import FolderDeleteAlert from "@/components/ui/folder.delete.alertbox.ui.component";

function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  return (
    <section className="w-full h-full flex flex-row items-center overflow-hidden">
      <Sidebar />
      <main className="flex flex-col grow-1 h-full p-3 ">
        <section className="page">
          <div className="mb-3 flex flex-row items-center justify-between">
            <Input
              type="text"
              placeholder="Search"
              startIcon={
                <SearchIcon className="text-secondary-foreground w-5 h-5" />
              }
            />
            <div className="flex flex-row items-center justify-center gap-6">
              <div className="flex flex-row items-center gap-4">
                <Tooltip>
                  <TooltipTrigger>
                    <DriveIcon className="w-5 h-5 text-secondary-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Connect to google drive</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <OnedriveIcon className="w-5 h-5 text-secondary-foreground cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>Connect to one drive</p>
                  </TooltipContent>
                </Tooltip>
                <Link href={"/dashboard/notifications"}>
                  <BellIcon className="w-5 h-5 text-secondary-foreground cursor-pointer" />
                </Link>
              </div>
              <AvatarBlock />
            </div>
          </div>
          {children}
        </section>
      </main>
      <FolderDeleteAlert />
    </section>
  );
}

export default DashboardLayout;
