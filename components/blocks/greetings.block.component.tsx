import React from "react";

function GreetingsBlock({ username }: { username: string }) {
  return (
    <div className="font-figtree text-2xl font-medium w-full flex flex-col items-center justify-center pt-[33px] gap-0.5 pb-[24px]" >
      <p>Hello {username}</p>
      <p>Welcome to <span className="font-semibold" >Oxygen</span> <span className="font-thin" >console</span></p>
    </div>
  );
}

export default GreetingsBlock;
