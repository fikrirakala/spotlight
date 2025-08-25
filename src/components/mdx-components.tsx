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
};
