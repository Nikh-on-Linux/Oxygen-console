"use client";
import React from "react";

function SectionLayout({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full p-2.5 gap-4">
      <span className="font-sans font-medium text-[16px] text-secondary-foreground">
        {title}
      </span>
      <div className="flex flex-row items-center justify-between gap-3" >{children}</div>
    </section>
  );
}

export default SectionLayout;
