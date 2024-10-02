'use client'

import { Card } from "../ui/card";
import React from "react";

function Clicker() {
  return (
    <Card className="flex active:scale-95 items-center justify-center size-32  rounded-full">
      <div className="flex select-none flex-col items-center justify-center h-3/4 w-3/4">
        <p>click me!</p>
      </div>
    </Card>
  );
}

export default Clicker;
