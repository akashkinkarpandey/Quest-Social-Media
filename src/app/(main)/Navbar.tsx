import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-r from-background/95 via-card/90 to-background/95 shadow-lg shadow-black/5 backdrop-blur-xl backdrop-saturate-150">
      {/* Main container with enhanced spacing and effects */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand / Logo with enhanced styling */}
        <Link
          href="/"
          className="group relative text-2xl font-black tracking-tight transition-all duration-300 hover:scale-105"
        >
          <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent transition-all duration-300 group-hover:from-primary/90 group-hover:via-primary group-hover:to-primary">
            Quest
          </span>
          {/* Subtle underline effect */}
          <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Center Search with enhanced container */}
        <div className="hidden flex-1 px-8 sm:flex">
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
            <div className="relative">
              <SearchField />
            </div>
          </div>
        </div>

        {/* User Button with enhanced styling */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 blur transition-all duration-300 hover:opacity-100" />
            <div className="relative">
              <UserButton />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile search with improved styling */}
      <div className="block border-t border-border/30 bg-gradient-to-r from-muted/50 to-muted/30 px-4 pb-4 pt-3 sm:hidden">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 blur" />
          <div className="relative">
            <SearchField />
          </div>
        </div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </header>
  );
}
