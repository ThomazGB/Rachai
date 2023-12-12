import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Rachai",
  description: "Vai uma caroninha?"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}