import { ReactNode } from "react";

import clsx from "clsx";

import { Blockquote } from "@/components/blockquote";
import { GrayscaleTransitionImage } from "@/components/grayscale-transition-image";
import { cn } from "@/lib/utils";

import { Border } from "./border";

export const MDXComponents = {
  Blockquote({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof Blockquote>) {
    return <Blockquote className={cn("my-32", className)} {...props} />;
  },
  img: function Img({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div
        className={cn(
          "group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6",
          className
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-16/10 w-full object-cover"
        />
      </div>
    );
  },
  TopTip({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <Border position="left" className={clsx("my-10 pl-8", className)}>
        <p className="font-display text-sm font-bold tracking-widest text-neutral-950 uppercase">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    );
  },
  Typography({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return <div className={cn("typography", className)} {...props} />;
  },
  wrapper({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
    return <div className={cn("mt-8", className)} {...props} />;
  },
  SectionUses({
    title,
    className,
    children,
  }: {
    title: string;
    className?: string;
    children: ReactNode;
  }) {
    return (
      <div className={cn("md:border-border/50 md:border-l md:pl-6", className)}>
        <div className="grid max-w-3xl grid-cols-1 gap-y-8 md:grid-cols-4">
          <h2 className="text-sm font-semibold">{title}</h2>
          <div className="md:col-span-3">
            <div className="typography space-y-10">{children}</div>
          </div>
        </div>
      </div>
    );
  },
  UsesItem({ title, children }: { title: string; children: ReactNode }) {
    return (
      <div>
        <h3 className="mt-0 mb-2 text-base">{title}</h3>
        {children}
      </div>
    );
  },
};
