import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";

export const metadata = {
  title: "Tomás Nieto",
  description: "Portfolio of Tomás Nieto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <main>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </main>
      </body>
    </html>
  );
}