"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";

export default function SearchField() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const q = (form.q as HTMLInputElement).value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="GET"
      action="/search"
      className="w-full"
    >
      <div className="group relative">
        <Input
          name="q"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-input bg-muted/40 px-4 py-2 pr-10 text-sm shadow-sm transition-all duration-200 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/30"
        />
        <SearchIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
    </form>
  );
}
