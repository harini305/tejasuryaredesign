import { Marcellus, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

// Headings: flared Roman closest to the logo's "TEJA SURYA" wordmark (an Optima-style face).
const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  title: "TejaSurya Meditation & Yoga — Denpasar, Bali",
  description:
    "TejaSurya Meditation & Yoga in Denpasar, Bali: Raja Yoga meditation, healing with prana energy, and an introduction to chakras, kundalini and aura to discover your true self.",
};

export const viewport = {
  themeColor: "#532B6D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${openSans.variable} ${marcellus.variable}`}>
      <body>{children}</body>
    </html>
  );
}
