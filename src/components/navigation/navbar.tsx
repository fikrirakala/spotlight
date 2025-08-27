import Image from "next/image";
import Link from "next/link";

import avatar from "@/images/avatar.webp";

import Navigation from "./navigation";
import ThemeSwitch from "./theme-switch";

function Avatar() {
  return (
    <div className="bg-background ring-border h-10 w-10 rounded-full p-0.5 shadow-lg ring-1">
      <Link aria-label="Home" href="/" className="pointer-events-auto">
        <Image
          src={avatar}
          alt=""
          className="h-9 w-9 rounded-full object-cover"
        />
      </Link>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="pointer-events-none pt-6">
      <div className="w-full sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="relative flex items-center gap-4">
                {/* Avatar */}
                <div className="flex flex-1">
                  <Avatar />
                </div>

                {/* Navigation */}
                <div className="flex flex-1 justify-end md:justify-center">
                  <Navigation />
                </div>

                {/* Dark mode */}
                <div className="flex justify-end md:flex-1">
                  <ThemeSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
