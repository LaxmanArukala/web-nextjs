"use client";

import { ReactNode } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function UserPageGate({ children }: Readonly<{ children: ReactNode }>) {
  const { isHydrated, isAuthenticated } = useAuth();

  if (!isHydrated) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 flex justify-center">
        <div className="h-10 w-56 bg-gray-200 rounded-lg animate-pulse" aria-hidden />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
