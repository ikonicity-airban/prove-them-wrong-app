import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
};

export default function Section({
  children,
  title,
  className,
  ...props
}: Props) {
  return (
    <section className={cn("w-full my-10", className)} {...props}>
      {title && <h2 className="prose prose-lg text-gray-900">{title}</h2>}
      {children}
    </section>
  );
}
