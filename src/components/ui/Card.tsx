import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={"rounded-card border border-neutral-medium bg-white p-4 transition-shadow duration-200 hover:shadow-md " + className}>{children}</section>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2 font-medium">{children}</h2>;
}


