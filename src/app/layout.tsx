import { type Metadata } from "next";

import Footer from "@/components/footer";
import Navbar from "@/components/navigation/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Spencer Sharp",
    default:
      "Spencer Sharp - Software designer, founder, and amateur astronaut",
  },
  description:
    "I’m Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="bg-muted flex h-full dark:bg-black">
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex w-full">
            <div className="fixed inset-0 flex justify-center sm:px-8">
              <div className="flex w-full max-w-7xl lg:px-8">
                <div className="bg-background ring-border w-full ring-1"></div>
              </div>
            </div>
            <div className="relative flex w-full flex-col">
              {/* Header */}
              <Navbar />

              <main className="flex-auto">{children}</main>

              {/* Footer */}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
