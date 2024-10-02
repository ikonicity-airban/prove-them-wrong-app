import { Card } from "@/components/ui/card";
import Footer from "@/components/ui/footer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <main className="flex flex-col max-w-screen items-center min-h-screen">
      <header className="py-10">
        <Card className="rounded-full min-w-[280px] flex flex-col items-center justify-center p-4">
          <div className="min-w-full">Announcement</div>
        </Card>
      </header>
      <div className="mb-10 w-full">{children}</div>
      <Footer />
    </main>
  );
}
