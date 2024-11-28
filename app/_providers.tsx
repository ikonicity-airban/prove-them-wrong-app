import { PointProvider } from "@/lib/contexts/rewards";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return <PointProvider>{children}</PointProvider>;
}

export default Providers;
