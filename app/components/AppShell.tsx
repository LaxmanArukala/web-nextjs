"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/** Full-bleed auth screens without site chrome (login/register only). */
const AUTH_PATHS = new Set(["/login", "/register"]);

export default function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const hideChrome = pathname != null && AUTH_PATHS.has(pathname);

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-[80vh]">{children}</main>
      <Footer />
    </>
  );
}
