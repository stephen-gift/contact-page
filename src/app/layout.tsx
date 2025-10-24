import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/global/Header";
import { Toaster } from "sonner";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${afacad.variable}  antialiased`}>
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </ReduxProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
