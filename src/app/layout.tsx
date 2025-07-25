import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Toaster } from "./components/ui/Toaster";
import { Toaster as Sonner  } from "./components/ui/Sonner";
import QueryProvider from "./components/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B Brand Store",
  description: "Brand and Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <QueryProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
                {children}
            </TooltipProvider>
          </QueryProvider>
      </body>
    </html>
  );
}
