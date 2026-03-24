"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "../../lib/store/store";

export default function ReduxProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const storeRef = useRef<AppStore | undefined>(undefined);
  storeRef.current ??= makeStore();
  return <Provider store={storeRef.current}>{children}</Provider>;
}
