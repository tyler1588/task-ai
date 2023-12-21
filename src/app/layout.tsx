import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NavBar from "@/components/navbar";
import CreateTaskForm from "@/components/createCategoryForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task AI",
  description: "A smarter was to manage your tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" data-theme="cupcake">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
