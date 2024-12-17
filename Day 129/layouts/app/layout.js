import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shinobi - A Ninja Coder",
  description: "A ninja coder",
};

// we can group the admin folder, means we have to write host.com/admin/admincomments or host.com/admin/adminlogin
// so if we use (admin) or anyname inside our main folder then we can group them 
// and we won't have to write host.com/admin/admincomments or host.com/admin/adminlogin.
// we only need to write host.com/adminlogin or host.com/admincomments

// I can't change the name now, if I do then it will take a long time to rename, probably i have to restart my vs code
// I don't wanna to do more task, commenting it just to understand the concept

// we can also generate metadata for our website, just go to the nextjs docs and search - generate metadata function


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
