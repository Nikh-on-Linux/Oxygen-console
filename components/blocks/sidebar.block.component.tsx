"use client";
import React from "react";
import Brand from "./brand.block.component";
import TabGroup from "../ui/tab.group.ui.component";
import TabItem from "../ui/tab.item.ui.component";
import BlankFileIcon from "../icons/blank-file.icons.component";
import FolderIcon from "../icons/folder.icons.component";
import PlusCircleIcon from "../icons/plus-circle.icons.component";
import HomeIcon from "../icons/home.icons.component";
import CloudIcon from "../icons/cloud.icons.component";
import UsersIcon from "../icons/users.icons.component";
import RouteIcon from "../icons/route.icons.component";
import LogoutIcon from "../icons/logout.icons.component";
import SettingsIcon from "../icons/settings.icons.component";

import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import UserIcon from "../icons/user.icons.component";

function Sidebar() {
  const router = useRouter();
  return (
    <section className="h-full w-[265px] bg-background px-2.5 py-2.5 flex flex-col gap-[10px]">
      <Brand />
      <div className="grow-1">
        <TabGroup title="Add files">
          <TabItem
            title="Upload Files"
            isTab={false}
            icon={
              <BlankFileIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={()=>{router.push('?upfi')}}
          />
          <TabItem
            title="Upload Folders"
            isTab={false}
            icon={
              <FolderIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={()=>{router.push('?upfd')}}
          />
          <TabItem
            title="Create a folder"
            isTab={false}
            icon={
              <PlusCircleIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={()=>{router.push('?cf')}}
          />
        </TabGroup>
        <TabGroup title="General">
          <TabItem
            title="Home"
            tag="home"
            icon={
              <HomeIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={() => {
              router.push("/dashboard");
            }}
          />
          <TabItem
            title="My Atmos"
            tag="myatmos"
            icon={
              <CloudIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={() => {
              router.push("/dashboard/myatmos");
            }}
          />
          <TabItem
            title="Shared"
            tag="shared"
            icon={
              <UsersIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={() => {
              router.push("/dashboard/shared");
            }}
          />
          <TabItem
            title="Keys"
            tag="keys"
            icon={
              <RouteIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
            }
            action={() => {
              router.push("/dashboard/keys");
            }}
          />
        </TabGroup>
      </div>
      <TabGroup title="System">
        <TabItem
          title="Account Settings"
          tag="account-settings"
          icon={
            <UserIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
          }
          action={() => {
            router.push("/dashboard/account-settings");
          }}
        />
        <TabItem
          title="Settings"
          tag="settings"
          icon={
            <SettingsIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
          }
          action={() => {
            router.push("/dashboard/settings");
          }}
        />
        <AlertDialog>
          <AlertDialogTrigger>
            <TabItem
              title="Logout"
              isTab={false}
              icon={
                <LogoutIcon className="w-5 h-5 text-secondary-foreground group-hover:text-foreground transition-all" />
              }
            />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription className="text-secondary-foreground font-medium text-sm" >
                You will be logged out from your account
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TabGroup>
    </section>
  );
}

export default Sidebar;
