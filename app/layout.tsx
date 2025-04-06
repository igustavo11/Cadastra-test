import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/sidebar/sidebar";
import { ClientProvider } from "@/lib/ClientContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cadastra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${inter.variable} font-sans`}>
      <body className="antialiased">
        <div className="flex">
          <Sidebar />
          <main className="flex-1 bg-gray-50">
            <ClientProvider>{children}</ClientProvider>
            <ToastContainer position="top-right" autoClose={3000} />
          </main>
        </div>
      </body>
    </html>
  );
}
