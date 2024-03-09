import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";

export const metadata: Metadata = {
  title: "ToDo Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
