import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Muke — Developer",
  description:
    "Portfolio of Aditya Muke — aspiring data scientist, web developer, and builder from Wardha, India.",
  openGraph: {
    title: "Aditya Muke — Developer",
    description: "Code. Learn. Build.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
