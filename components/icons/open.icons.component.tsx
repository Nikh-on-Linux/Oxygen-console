import React from "react";

function OpenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M14 10L21 3M21 3H15M21 3V9M10 14L3 21M3 21H9M3 21L3 15"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OpenIcon;
