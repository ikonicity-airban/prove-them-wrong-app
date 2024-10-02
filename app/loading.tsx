import { ArrowRightCircleIcon } from "lucide-react";
import React from "react";
import Section from "@/components/section";

function MainLoading() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <Section>
        <ArrowRightCircleIcon className="animate-spin h-8 w-8" />
      </Section>
    </main>
  );
}

export default MainLoading;
