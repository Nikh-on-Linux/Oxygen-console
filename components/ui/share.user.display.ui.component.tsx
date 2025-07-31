import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserDisplay({
  image,
  name,
  className,
}: {
  image?: string;
  name?: string;
  className?: string;
}) {
  return (
    <div className={` ${className} flex flex-row items-center gap-2`}>
      <Avatar>
        <AvatarImage src={image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="font-sans text-secondary-foreground" >{name}</span>
    </div>
  );
}

export default UserDisplay;
