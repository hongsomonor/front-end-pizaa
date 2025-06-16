import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Header/Navbar";
import { Battambang } from "next/font/google";

import { ThemeProvider } from "next-themes";
import Header from "../components/Header/Header";

const battambang = Battambang({
  subsets: ["khmer"], // Use 'khmer' instead of 'latin'
  weight: ["400", "700"], // Optional: specify font weights you need
});
export const metadata: Metadata = {
  title: "Online || Shop",
  description: "Assignment Web",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={battambang.className}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header locale={locale} />
            <Navbar />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
