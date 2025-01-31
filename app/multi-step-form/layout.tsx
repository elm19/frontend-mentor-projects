import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "multi step form",
  description: "this is multi step form design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} bg-[#eef5ff] w-svw h-svh min-h-96 md:flex md:justify-center md:items-center md:text-center`}
      >
        {children}
      </body>
    </html>
  );
}
