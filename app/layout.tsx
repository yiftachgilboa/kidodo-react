import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "kidodo | מפתחות לידע", description: "קורס חשבון שמעניק לילדים טכניקות ורעיונות לבניית גישה נכונה למספרים.", icons: { icon: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="he" dir="rtl"><body>{children}</body></html>; }
