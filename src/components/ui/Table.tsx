import React from "react";

export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-card border border-neutral-medium">
      <table className="w-full min-w-[560px] text-left text-sm">
        {children}
      </table>
    </div>
  );
}

export function Th({ children }: { children?: React.ReactNode }) {
  return <th className="bg-neutral-light px-3 py-2 text-neutral-dark">{children ?? ""}</th>;
}

export function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2">{children}</td>;
}


