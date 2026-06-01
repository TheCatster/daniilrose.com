"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:border-accent hover:text-accent"
    >
      {/* Icon is driven purely by the `.dark` class so there is no hydration
          mismatch and no client-side state needed. */}
      <FiMoon size={18} className="dark:hidden" />
      <FiSun size={18} className="hidden dark:block" />
    </button>
  );
}
