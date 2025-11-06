import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "accent" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 active:scale-[0.98]";
  const styles: Record<string, string> = {
    primary: "bg-primary text-white hover:bg-primary-light focus:ring-primary",
    secondary: "border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    accent: "bg-accent text-white hover:bg-accent-dark focus:ring-accent",
    ghost: "text-neutral-dark hover:bg-neutral-light focus:ring-neutral-medium",
  };
  const classes = [base, styles[variant], className].join(" ");
  return <button className={classes} {...props} />;
}


