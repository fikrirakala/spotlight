"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const links = [
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

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="flex-none pt-32">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t pt-10 pb-16">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  {/* Navigation */}
                  <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
                    {links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className={cn(
                          "text-foreground transition hover:text-teal-500",
                          pathname === link.href && "text-teal-500"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-muted-foreground text-sm">
                    &copy; 2025 Spencer Sharp. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
