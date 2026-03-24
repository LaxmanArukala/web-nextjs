"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scale, Menu, X, Search, User, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

function DesktopAuthBar(
  props: Readonly<{
    isHydrated: boolean;
    isAuthenticated: boolean;
    onLogout: () => void;
  }>
) {
  const { isHydrated, isAuthenticated, onLogout } = props;
  if (isHydrated === false) {
    return <div className="h-9 w-[220px] rounded-lg bg-gray-100 animate-pulse" aria-hidden />;
  }
  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/user/dashboard"
          className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
        >
          <User size={16} /> Dashboard
        </Link>
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
        >
          <LogOut size={16} /> Logout
        </button>
      </div>
    );
  }
  return (
    <Link
      href="/login"
      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
    >
      Login / Signup
    </Link>
  );
}

function MobileAuthBar(
  props: Readonly<{
    isHydrated: boolean;
    isAuthenticated: boolean;
    onLogout: () => void;
    onNavigate: () => void;
  }>
) {
  const { isHydrated, isAuthenticated, onLogout, onNavigate } = props;
  if (isHydrated === false) {
    return <div className="h-10 w-40 rounded-lg bg-gray-100 animate-pulse" aria-hidden />;
  }
  if (isAuthenticated) {
    return (
      <>
        <Link
          href="/user/dashboard"
          onClick={onNavigate}
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors w-fit flex items-center gap-2"
        >
          <User size={16} /> Dashboard
        </Link>
        <button
          type="button"
          onClick={() => {
            onLogout();
            onNavigate();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors w-fit flex items-center gap-2"
        >
          <LogOut size={16} /> Logout
        </button>
      </>
    );
  }
  return (
    <Link
      href="/login"
      onClick={onNavigate}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors w-fit"
    >
      Login / Signup
    </Link>
  );
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isHydrated, logout } = useAuth();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About us" },
    { path: "/blog", label: "Blog" },
    { path: "/lawyers-list", label: "Find Lawyers" },
    { path: "/lawyer-registration", label: "Lawyer registration" },
    // { path: "/discussions", label: "Discussions" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: any) => pathname === path;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-blue-900 hover:text-blue-700 transition-colors"
          >
            <Scale className="h-8 w-8" />
            <span className="text-xl font-bold">LegalHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.path)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search + Login/Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" />

            <DesktopAuthBar
              isHydrated={isHydrated}
              isAuthenticated={isAuthenticated}
              onLogout={handleLogout}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-blue-600 ${
                    isActive(item.path) ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <MobileAuthBar
                isHydrated={isHydrated}
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
                onNavigate={() => setIsMenuOpen(false)}
              />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
