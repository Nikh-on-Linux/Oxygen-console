import React from "react";

function TabGroup({
  title,
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col py-3.5 px-3 gap-2.5">
      <span className="font-sans font-medium text-muted-foreground text-sm">
        {title}
      </span>
      <div className="flex flex-col justify-center gap-1" >{children}</div>
    </div>
  );
}

export default TabGroup;
