import { Montserrat } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PopupsProvider } from "@/context/PopupsContext";
import { CartProvider } from "@/context/CartContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AuthProvider } from "@/context/AuthContext";
import Preloader from "@/components/Preloader";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Professional digital production | Modellist Digital",
    template: "%s | Modellist Digital",
  },
  description:
    "Meet Modellist Digital - a professional digital production company specialising in video production, animation, UI/UX design and 3D models development. Get a quote today.",
  openGraph: {
    title: {
      default: "Professional digital production | Vancant Group",
      template: "%s | Vancant Group",
    },
    description:
      "Meet Modellist Digital - a professional digital production company specialising in video production, animation, UI/UX design and 3D models development. Get a quote today.",
    images: "https://modellistdigital.com/images/meta.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <CartProvider>
            <PopupsProvider>
              
              <Header />
              <main>{children}</main>
              <Footer />
            </PopupsProvider>
          </CartProvider>
        </AuthProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
