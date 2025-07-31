"use client";
import React from "react";

function FiletypeCard({
  icon,
  typename,
  number,
}: {
  icon: React.ReactNode;
  typename: string;
  number:number;
}) {
  return (
    <div className="dark:border-accent dark:bg-muted px-3 py-2.5 flex flex-row rounded-md border-[1px] border-background dark:bg-card items-center gap-2.5 w-full max-w-[350px] shadow-sm h-[57px]">
      <div>
        {icon}
      </div>
      <div className="flex flex-col select-none">
        <span className="font-sans font-medium text-[16px]">{typename}</span>
        <span className="font-sans text-xs text-secondary-foreground" >{number}</span>
      </div>
    </div>
  );
}

export default FiletypeCard;
