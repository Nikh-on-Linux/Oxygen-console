"use client";
import React, { useState } from "react";

function Input({
  className,
  rootId,
  rootClassName,
  startIcon,
  endIcon,
  type,
  placeholder,
  ...props
}: {
  className?: string;
  rootClassName?: string;
  startIcon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  rootId?: string;
  endIcon?: React.ReactNode;
}) {
  const [value, setValue] = useState("");
  return (
    <div
      id={rootId}
      className={` ${rootClassName} flex flex-row items-center gap-2.5 border-[1px] border-border rounded-md bg-background py-1.5 px-3`}
    >
      <div>{startIcon}</div>
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className="font-sans outline-0 w-[20rem]"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>{endIcon}</div>
    </div>
  );
}

export default Input;
