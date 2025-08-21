"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  function handleClick() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="pointer-events-auto">
      <Button
        variant="outline"
        size="icon"
        onClick={handleClick}
        className="rounded-full"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-teal-400 transition-all dark:scale-100 dark:rotate-0" />

        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
