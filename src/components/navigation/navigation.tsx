"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const navigation = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Articles",
    href: "/articles",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Uses",
    href: "/uses",
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
  },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="bg-background dark:bg-input/30 dark:border-input flex rounded-full border px-3 text-sm font-medium shadow-lg">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={cn(
                "text-foreground relative block px-3 py-2 transition hover:text-teal-500",
                pathname === item.href && "text-teal-500"
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
                ></motion.span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
