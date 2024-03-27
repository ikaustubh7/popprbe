import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
