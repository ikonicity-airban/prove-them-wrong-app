"use client";;

import { usePointsState } from "@/lib/contexts/rewards";

function PointCounter() {
  const { points } = usePointsState();

  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-4xl">{points}</p>
      <span>PTW</span>
    </div>
  );
}

export default PointCounter;
