import { validateRequest } from "@/auth";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import streamServerClient from "@/lib/stream";
import { Bookmark, Home } from "lucide-react";
import Link from "next/link";
import MessagesButton from "./MessagesButton";
import NotificationsButton from "./NotificationsButton";

interface MenuBarProps {
  className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {
  const { user } = await validateRequest();

  if (!user) return null;

  const [unreadNotificationsCount, unreadMessagesCount] = await Promise.all([
    prisma.notification.count({
      where: {
        recipientId: user.id,
        read: false,
      },
    }),
    (await streamServerClient.getUnreadCount(user.id)).total_unread_count,
  ]);

  return (
    <nav
      className={`flex flex-col gap-2 rounded-2xl border border-border bg-card/70 p-3 shadow-md backdrop-blur-md ${className}`}
    >
      {/* Home */}
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 rounded-xl px-4 py-2 text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
        title="Home"
        asChild
      >
        <Link href="/">
          <Home className="h-5 w-5" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      {/* Notifications */}
      <NotificationsButton
        initialState={{ unreadCount: unreadNotificationsCount }}
      />

      {/* Messages */}
      <MessagesButton initialState={{ unreadCount: unreadMessagesCount }} />

      {/* Bookmarks */}
      <Button
        variant="ghost"
        className="flex items-center justify-start gap-3 rounded-xl px-4 py-2 text-sm font-medium transition hover:bg-primary/10 hover:text-primary"
        title="Bookmarks"
        asChild
      >
        <Link href="/bookmarks">
          <Bookmark className="h-5 w-5" />
          <span className="hidden lg:inline">Bookmarks</span>
        </Link>
      </Button>
    </nav>
  );
}
