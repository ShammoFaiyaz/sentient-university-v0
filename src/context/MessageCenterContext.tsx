"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Ctx = {
  isOpen: boolean;
  setOpen: (v: boolean) => void;
  unread: number;
  setUnread: (n: number) => void;
};
const MessageCenterCtx = createContext<Ctx | null>(null);
export function MessageCenterProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [unread, setUnread] = useState(3);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "m") setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <MessageCenterCtx.Provider value={{ isOpen, setOpen, unread, setUnread }}>
      {children}
    </MessageCenterCtx.Provider>
  );
}
export const useMessageCenter = () => {
  const ctx = useContext(MessageCenterCtx);
  if (!ctx) throw new Error("useMessageCenter must be inside provider");
  return ctx;
};


