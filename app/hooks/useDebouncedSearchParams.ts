"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

interface Options {
  key?: string;
  delay?: number;
}

export function useDebouncedSearchParams({
  key = "search",
  delay = 500,
}: Options = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get(key) ?? "");
  const [isPending, startTransition] = useTransition();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* 🔁 Sync URL → input (back/forward) */
  useEffect(() => {
    setValue(searchParams.get(key) ?? "");
  }, [searchParams, key]);

  /* ⏱ Debounced URL update (LOW PRIORITY) */
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (!value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      // 🔥 Critical fix
      startTransition(() => {
        router.replace(`?${params.toString()}`);
      });
    }, delay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [value, delay, key]);

  return {
    value,
    setValue,
    isPending, // optional: show loader if needed
  };
}
