"use client";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label@2.1.2";
import { cva } from "class-variance-authority@0.7.1";
import { cn } from "./utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef(function Label({ className, ...props }, ref) {
  return (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
