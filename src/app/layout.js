import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Container from "@mui/material/Container";
import "./globals.css";

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
        </main>
      </body>
    </html>
  );
}