import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import ContextProvider from "@/components/ContextProvider";
import SideBar from "@/components/SideBar";
import BlurContainer from "@/components/BlurContainer";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const libreBaskerville = localFont({
  src: [
    {
      path: "../../public/fonts/LibreBaskerville-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-libreBaskerville"
});

const shrikhand = localFont({
  src: [
    {
      path: "../../public/fonts/Shrikhand-Regular.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-Shrikhand-Regular"
});

const itcWillow = localFont({
  src: [
    {
      path: "../../public/fonts/ITCWillow.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-ITCWillow"
});

const itcAvantGardeGothicBk = localFont({
  src: [
    {
      path: "../../public/fonts/ITCAvantGardeGothicBk.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-ITCAvantGardeGothicBk"
});

export const metadata = {
  title: "Red Camp Hancock",
  description: "A nice place to be"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} font-serif ${shrikhand.variable} font-shrikhand ${itcWillow.variable} font-itcWillow ${itcAvantGardeGothicBk.variable} font-itcAvantGardeGothicBk`}
    >
      <body className={inter.className}>
        <ContextProvider>
          <div className="flex flex-col w-full font-itcAvantGardeGothicBk">
            {/* <SideBar /> */}
            {/* <BlurContainer /> */}

            {/* <NavBar /> */}

            <main className="flex flex-col items-center justify-between bg-gray-100">
              {children}
            </main>

            {/* <Footer /> */}
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
