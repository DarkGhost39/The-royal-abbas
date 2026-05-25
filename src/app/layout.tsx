import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Royal Abaas — Luxury Unisex Salon",
  description:
    "A premium unisex salon crafted for those who appreciate the art of beauty and the luxury of exceptional care. Book your appointment via WhatsApp.",
  keywords: ["luxury salon", "unisex salon", "hair styling", "Lahore salon", "The Royal Abaas"],
  openGraph: {
    title: "The Royal Abaas — Luxury Unisex Salon",
    description: "Where Art Meets Elegance. Premium beauty & grooming experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
