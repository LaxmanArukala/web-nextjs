"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Briefcase,
  CreditCard,
  HelpCircle,
  MessageCircleQuestion,
} from "lucide-react";

const tabs = [
  { href: "/user/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/user/cases", label: "My Cases", icon: Briefcase },
  { href: "/user/payments", label: "My Payments", icon: CreditCard },
  { href: "/user/help", label: "Help", icon: HelpCircle },
  { href: "/user/faq", label: "FAQ", icon: MessageCircleQuestion },
] as const;

function isTabActive(href: string, pathname: string): boolean {
  if (href === "/user/dashboard") {
    return pathname === "/user/dashboard" || pathname === "/user";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function UserPortalNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-16 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <nav
          className="flex gap-1 overflow-x-auto py-3 scrollbar-thin [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Account sections"
        >
          {tabs.map(({ href, label, icon: Icon }) => {
            const showActive = isTabActive(href, pathname);

            return (
              <Link
                key={href}
                href={href}
                className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                  showActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-900"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
