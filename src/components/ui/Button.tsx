"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-control font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90",
        accent: "bg-accentStrong text-white hover:bg-accentStrong/90",
        ghost: "text-primary border border-line bg-white hover:bg-primary/5",
        neutral: "bg-ink/90 text-white hover:bg-ink",
        danger: "bg-error text-white hover:bg-error/90",
      },
      size: {
        sm: "min-h-[40px] px-3 text-sm",
        md: "min-h-[44px] px-4 text-sm",
        lg: "min-h-[48px] px-5 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: "button" | "a";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, as = "button", href, ...props }, ref) => {
    if (as === "a") {
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={cn(buttonVariants({ variant, size }), className)} {...(props as any)} />
      );
    }
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
}
);
Button.displayName = "Button";

export { buttonVariants, cn };


