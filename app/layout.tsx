import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "huseyindas.dev",
  description: "software devoloper | huseyin das",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#18181B]">
        {children}
      </body>
    </html>
  )
}
