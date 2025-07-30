"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function TabItem({
  icon,
  title,
  action,
  tag,
  isTab = true,
  options,
  optionList,
}: {
  icon?: React.ReactNode;
  title?: string;
  action?: Function;
  tag?: string;
  isTab?: Boolean;
  options?: Boolean;
  optionList?: Array<string>;
}) {
  const pathname = usePathname();
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    const pathArray = pathname.split("/");
    if(pathArray.length > 2){
      tag == pathArray[2] && isTab ? setActiveState(true) : setActiveState(false);
    }
    else{
      setActiveState(false);
      if(tag=="home" && isTab){
        setActiveState(true);
      }
    }
  }, [pathname]);

  return (
    <div
      onClick={() => {
        action && action();
      }}
      className={`
    flex items-center transition-all select-none group py-2 px-2.5 gap-2.5 rounded-[7px] flex-row
    ${activeState ? "bg-sidebar-primary" : "bg-none"}
    `}
    >
      <div>{icon}</div>
      <div>
        <span className={`group-hover:text-foreground transition-all font-sans text-secondary-foreground font-medium text-[16px]
          ${activeState ? "text-primary-foreground" : "text-secondary-foreground"}
          `}>
          {title}
        </span>
      </div>
    </div>
  );
}

export default TabItem;
