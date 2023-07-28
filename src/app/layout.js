import HomeFooter from "@/components/HomeFooter";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Search Box - Google Clone Next Js 13",
  description: "Search Box - Google Clone Next Js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* footer */}
        <HomeFooter />
      </body>
    </html>
  );
}
