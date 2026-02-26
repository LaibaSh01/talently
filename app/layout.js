import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.scss";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talently",
  description:
    "Talently connects tech talent with top remote job opportunities worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
