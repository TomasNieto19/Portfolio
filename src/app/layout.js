import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Container from "@mui/material/Container";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Tomás Nieto",
  description: "Portfolio of Tomás Nieto",
  charst: "utf-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main>
          <Container maxWidth="md">
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </Container>
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}