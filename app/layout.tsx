import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terapia para Todos — Psicoterapia acessível e humanizada",
  description:
    "Psicoterapia com valor social, escuta sem julgamento e um espaço genuinamente seguro para cuidar da sua saúde mental.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
