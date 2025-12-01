import { Montserrat } from "next/font/google";
import "@/styles/base.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PopupsProvider } from "@/context/PopupsContext";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import Preloader from "@/components/Preloader";
import { GoogleAnalytics } from '@next/third-parties/google';
import { CookiePopup } from "@/components/CookiePopup";
import { NextIntlClientProvider } from "next-intl";

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
      default: "Professional digital production | Modellist Digital",
      template: "%s | Modellist Digital",
    },
    description:
      "Meet Modellist Digital - a professional digital production company specialising in video production, animation, UI/UX design and 3D models development. Get a quote today.",
    images: "https://modellistdigital.com/images/meta.png",
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale ?? 'en'}>
      <body className={montserrat.className}>
        <GoogleAnalytics gaId="G-YXL796F4GX" />
        <NextIntlClientProvider>
          <AuthProvider>
            <CartProvider>
              <PopupsProvider>
                <Preloader />
                <Header />
                <main>{children}</main>
                <Footer />
                <CookiePopup />
              </PopupsProvider>
            </CartProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
