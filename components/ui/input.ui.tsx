"use client";
import React, { useState } from "react";

function Input({
  className,
  startIcon,
  type,
  placeholder,
  ...props
}: {
  className?: string;
  startIcon?: React.ReactNode;
  type?: string;
  placeholder?: string;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-row items-center gap-2.5 border-[1px] border-border rounded-md bg-background py-1.5 px-3">
      {startIcon}
      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className="font-sans outline-0 w-[20rem]"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
