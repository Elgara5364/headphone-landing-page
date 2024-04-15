import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Responsive Landing Page Headphone",
  description: "Responsive Landing Page Headphone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
