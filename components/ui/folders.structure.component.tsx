"use client"
import React from 'react'
import FolderIcon from "../icons/folder.icons.component";

function FolderStructure({ foldername, path }: { foldername: string; path?: string }) {
  return (
    <div className='px-3 gap-3 relative cursor-pointer transition-all w-full py-2.5 flex flex-row items-center rounded-md border-[1px] bg-secondary hover:dark:bg-accent border-border' >
        <FolderIcon className='w-6.5 h-6.5 select-none' />
        <div className='flex flex-col w-full' >
            <span className='font-sans font-medium text-[16px] select-none'>{foldername}</span>
            <span className='font-sans text-secondary-foreground text-xs w-[17rem] text-ellipsis overflow-hidden'>{path}</span>
        </div>
    </div>
  )
}

export default FolderStructure