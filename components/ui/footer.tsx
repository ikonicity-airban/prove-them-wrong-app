"use client";

import { Card, CardContent } from "./card";
import { House, Rocket, User } from "lucide-react";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

const navLinks: NavLinkProps[] = [
  { href: "/", icon: <House />, text: "Home" },
  { href: "/missions", icon: <Rocket />, text: "Mission" },
  { href: "/referrals", icon: <User />, text: "Referrals" },
];

const NavLink = ({ href, icon, text }: NavLinkProps) => {
  const currentPathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        currentPathname == href && "text-purple-700",
        "flex flex-col justify-center items-center"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 p-4">
      <Card className="min-w-[90vw]">
        <CardContent className="p-3 pt-4 rounded-;2xl w-full">
          <nav>
            <ul className="flex items-center justify-around">
              {navLinks.map((linkProps) => (
                <li key={navLinks.length}>
                  <NavLink {...linkProps} />
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>
    </footer>
  );
}
