"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { AUTH_COOKIE_NAME } from "../../lib/authConstants";

function setClientAuthCookie(token: string) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 7;
  const secure =
    typeof location !== "undefined" && location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function clearClientAuthCookie() {
  if (typeof document === "undefined") return;
  document.cookie = `${AUTH_COOKIE_NAME}=; Path=/; Max-Age=0`;
}

interface AuthContextType {
  isAuthenticated: boolean;
  /** False until localStorage has been read on the client (avoids wrong header flash). */
  isHydrated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      setClientAuthCookie(token);
    }
    setIsHydrated(true);
  }, []);

  const login = useCallback((token: string) => {
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
    setClientAuthCookie(token);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    clearClientAuthCookie();
  }, []);

  const value = useMemo(
    () => ({ isAuthenticated, isHydrated, login, logout }),
    [isAuthenticated, isHydrated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
