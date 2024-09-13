import React from 'react';
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const linkVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-bold text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        goldFCS:
          "bg-[#f8a312] font-bold text-black shadow-sm hover:bg-gold/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-20 px-32 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
export interface ButtonProps
  extends React.LinkHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
}

const Link = ({ href, children, target = "_self", rel = "noopener noreferrer", variant, size, className }: { 
  href: string; 
  children: React.ReactNode; 
  target?: string; 
  rel?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "goldFCS" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) => {
  return (
    <a href={href} target={target} rel={rel} className={cn(linkVariants({ variant, size, className }))}>
      {children}
    </a>
  );
};

export default Link;
