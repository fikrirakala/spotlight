"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="pointer-events-auto md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-full px-5">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent className="gap-0">
          <SheetHeader className="p-6">
            <SheetTitle className="text-muted-foreground text-sm">
              Navigation
            </SheetTitle>
          </SheetHeader>
          <ul className="divide-border divide-y px-6 pt-0 pb-6 text-base">
            {navigation.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
