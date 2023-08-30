import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NammaAcademy | Embrace the joy of learning",
  description:
    "Elevate learning with Namma Academy – your trusted source for CBSE and ICSE math excellence and immersive online web development classes. Empowering students with strong math foundations while delving into the world of web creation. Join us for a holistic learning experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
