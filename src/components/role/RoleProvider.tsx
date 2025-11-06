"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Role = "student" | "teacher" | "admin";

type RoleContextValue = {
  role: Role;
  setRole: (role: Role) => void;
};

const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("student");

  // Load persisted role
  useEffect(() => {
    try {
      const persisted = localStorage.getItem("su.role");
      if (persisted === "student" || persisted === "teacher" || persisted === "admin") {
        setRole(persisted);
      }
    } catch {}
  }, []);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem("su.role", role);
    } catch {}
  }, [role]);

  const value = useMemo(() => ({ role, setRole }), [role]);

  return <RoleContext.Provider value={value}>{children}</RoleContext.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleContext);
  if (!ctx) throw new Error("useRole must be used within RoleProvider");
  return ctx;
}


