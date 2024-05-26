import { Inter } from "next/font/google";
import "./globals.css";


//conponents//
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webb-Portfojo | 2024",
  description: "Det här är Rodrigo Sebastian, egen Utvecklad Webb-portfoljo, senast puudatering 2024",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme='light'>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
