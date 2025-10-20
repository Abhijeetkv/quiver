import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiver",
  description: "A modern, open-source automation platform",
};

/**
 * Root layout that applies global fonts, provides TRPC context, and mounts a global toaster.
 *
 * Renders the top-level HTML and BODY elements with configured font CSS variables and antialiasing,
 * wraps the app content with the TRPC React provider, and includes a Toaster for toast notifications.
 *
 * @param children - The application content to render inside the TRPC provider.
 * @returns The root React element containing the HTML structure, body classes, TRPC provider, and Toaster.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCReactProvider>
          {children}
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}