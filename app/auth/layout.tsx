import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full h-full" >
        {children}
    </main>
  );
}

export default AuthLayout;
