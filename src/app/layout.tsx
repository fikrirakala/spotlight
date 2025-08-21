import { type Metadata } from "next";

import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Studio",
    default: "Studio - Award winning developer studio based in Denmark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="bg-muted flex h-full dark:bg-black">
        <div className="flex w-full">
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="bg-background ring-border w-full ring-1"></div>
            </div>
          </div>
          <div className="relative flex w-full flex-col">
            {/* Header */}

            <main className="flex-auto">{children}</main>

            {/* Footer */}
          </div>
        </div>
      </body>
    </html>
  );
}
