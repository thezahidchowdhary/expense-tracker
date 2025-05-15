import { SpeedInsights } from '@vercel/speed-insights/next';  // ✅ Import SpeedInsights
import type React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/lib/auth-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track your expenses with Plaid integration and AI insights",
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Expense Tracker</title>
      </head>
      <body className={inter.className}>
        {/* Wrap the children in the ThemeProvider and AuthProvider */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
        {/* ✅ Add the SpeedInsights component */}
        <SpeedInsights />
      </body>
    </html>
  );
}
