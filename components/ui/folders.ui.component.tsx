"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import FolderStructure from "./folders.structure.component";
import UserIcon from "../icons/user.icons.component";
import UserDisplay from "./share.user.display.ui.component";

function Folders({ foldername, path }: { foldername: string; path?: string }) {
  const router = useRouter();
  return (
    <ContextMenu modal={false}>
      <ContextMenuTrigger className="max-w-[350px] w-full">
        <FolderStructure foldername={foldername} path={path} />
      </ContextMenuTrigger>
      <ContextMenuContent className="font-sans w-full">
        <ContextMenuSub>
          <ContextMenuSubTrigger>Open</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              Open
              <ContextMenuShortcut>Return</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Open in New Tab
              <ContextMenuShortcut>Ctrl + Return</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Open in New Window
              <ContextMenuShortcut>Shift + Return</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>Ctrl + X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>Ctrl + C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Copy to...</ContextMenuItem>
        <ContextMenuItem>Move to...</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <Command>
              <CommandInput placeholder="Search users..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Recently shared">
                  <CommandItem>
                    <UserDisplay
                      name="shaw.floren63@gmail.com"
                      image="https://www.untitledui.com/images/avatars/fleur-cook?"
                    />
                  </CommandItem>
                  <CommandItem>
                    <UserDisplay
                      name="allane23@gmail.com"
                      image="https://www.untitledui.com/images/avatars/aliah-lane?"
                    />
                  </CommandItem>
                  <CommandItem>
                    <UserDisplay
                      name="rosemily@gmail.com"
                      image="https://www.untitledui.com/images/avatars/ava-bentley?"
                    />
                  </CommandItem>
                  <CommandItem>
                    <UserDisplay
                      name="santiago_ashwin12@gmail.com"
                      image="https://www.untitledui.com/images/avatars/ashwin-santiago?"
                    />
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
              </CommandList>
            </Command>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>Hide folder</ContextMenuItem>
        <ContextMenuItem
          variant="destructive"
          onClick={() => {
            router.push("?fdab");
          }}
        >
          Move to Trash
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Properties</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export default Folders;
