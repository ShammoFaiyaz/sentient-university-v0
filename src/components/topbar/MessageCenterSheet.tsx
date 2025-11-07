"use client";

import { useMessageCenter } from "@/context/MessageCenterContext";
import { X, Search, SquarePen } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const DEMO_THREADS = [
  { id: "t1", name: "Admissions Support", last: "We received your docs ✔", avatar: "/news/policy.svg", unread: 1 },
  { id: "t2", name: "Algorithms – Section A", last: "Quiz 2 starts at 3pm.", avatar: "/news/lab.svg", unread: 2 },
  { id: "t3", name: "Career Coach", last: "Mock interview link shared.", avatar: "/news/ai.svg", unread: 0 },
];

export default function MessageCenterSheet() {
  const { isOpen, setOpen, setUnread } = useMessageCenter();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-[3px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-[110] h-full w-[min(96vw,420px)] bg-white dark:bg-neutral-900 shadow-elevation-md border-l border-neutral-200/70 dark:border-neutral-800 flex flex-col"
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            role="dialog"
            aria-label="Messaging Center"
          >
            <header className="flex items-center justify-between border-b border-neutral-200/70 dark:border-neutral-800 px-4 py-3">
              <h2 className="text-base font-semibold">Messaging Center</h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="p-4">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-neutral-400" />
                <input
                  className="w-full rounded-lg border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 pl-9 pr-3 py-2 text-sm outline-none"
                  placeholder="Search conversations"
                />
              </div>

              <ul className="mt-4 space-y-2">
                {DEMO_THREADS.map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => setUnread((u) => Math.max(0, u - t.unread))}
                      className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                      <div className="relative h-9 w-9 overflow-hidden rounded-full">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{t.name}</span>
                          {t.unread > 0 && (
                            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                              {t.unread}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-neutral-500">{t.last}</div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compose floating action button */}
            <button
              aria-label="New message"
              className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
              onClick={() => {/* UI-only compose */}}
            >
              <SquarePen className="h-6 w-6" />
            </button>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}


