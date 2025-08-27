"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      <ul className="bg-background ring-border flex rounded-full px-3 text-sm font-medium shadow-lg ring-1">
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
