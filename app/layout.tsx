import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";

export const geistMono = localFont({
  src: "../app/fonts/GeistMono-Regular.woff2",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Shakana's Portfolio",
  description:
    "Hi, I'm Shakana Jamal Moalin – a frontend and fullstack developer passionate about clean design, secure web applications, and user-friendly experiences. I specialize in React, Next.js, TypeScript, and .NET. Explore my projects and discover how I bring ideas to life through code.",
  icons: {
    icon: "/plant.svg",
    shortcut: "/plant.svg",
    apple: "/plant.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
