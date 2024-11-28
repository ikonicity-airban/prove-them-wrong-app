"use client";;

import Image from "next/image";
import React from "react";
import { usePointsAction } from "@/lib/contexts/rewards";

function Clicker() {
  const { addPoints } = usePointsAction();

  const circleRef = React.useRef<HTMLDivElement>(null);

  //create and add a bubble point and float and fades
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (circleRef.current) {
      const { left, top } = circleRef.current.getBoundingClientRect();

      const x = e.clientX - left;
      const y = e.clientY - top;
      const distance = Math.sqrt(x * x + y * y);
      if (distance < 300) {
        addPoints(1);
        const el = document.createElement("div");
        el.className = "bubble";
        el.innerHTML = "💥";
        el.style.left = `${e.clientX}px`;
        el.style.userSelect = "none";
        el.style.top = `${e.clientY}px`;
        el.style.zIndex = "100";
        document.body.appendChild(el);
        setTimeout(() => {
          el.remove();
        }, 500);
      }
    }
  };

  return (
    <div
      ref={circleRef}
      className="flex active:scale-95 cursor-pointer items-center justify-center size-40 object-fill"
      onClick={handleClick}
    >
      <Image
        src={"/coin.png"}
        alt="coin"
        width={500}
        height={500}
        className="w-full h-full shadow-lg rounded-full"
      />
    </div>
  );
}

export default Clicker;
