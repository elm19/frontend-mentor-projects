import type { Metadata } from "next";
import "./globals.css";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eLm19 FME Projects",
  description: "Collections of eLm19 frontEnd Mentor Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          
        <Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
