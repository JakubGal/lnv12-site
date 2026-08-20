import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lnv.sk"),
  title: "LNV12 | Ludanická nočná výzva",
  description:
    "12-hodinová nočná výzva v Ludaniciach. Beh, turistika a zážitok pod hviezdami 21. – 22. augusta 2026.",
  icons: { icon: "/lnv12-2026-poster.jpg" },
  openGraph: {
    title: "LNV12 | Ludanická nočná výzva",
    description: "Každý krok píše príbeh. Dvanásť hodín, tvoj rytmus, jedna noc.",
    url: "https://lnv.sk",
    siteName: "LNV12",
    images: [{ url: "/lnv12-2026-poster.jpg", alt: "Ludanická nočná výzva 2026" }],
    locale: "sk_SK",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#06131f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
