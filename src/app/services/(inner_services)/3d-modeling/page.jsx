import React from "react";
import "@/styles/services.scss";
import InnerServicesHome from "./_components/InnerServicesHome";
import PricingBlock from "./_components/PricingBlock";
import Customization from "./_components/Customization";
import Packages from "./_components/Products";
import MonthlyPackage from "./_components/MonthlyPackage";
import Examples from "./_components/Examples";
import Products from "./_components/Products";
import RequestBlockServices from "@/components/RequestBlockServices";
import ThanksPopup from "@/components/ThanksPopup";

export const metadata = {
  title: "3D modelling",
  description:
    "Discover the ultimate opportunity to enhance your experience with our professional 3D models. We offer a variety of printing plans for everyday tools that make your life easier and more enjoyable.",
  openGraph: {
    title: "3D modelling",
    description:
      "Discover the ultimate opportunity to enhance your experience with our professional 3D models. We offer a variety of printing plans for everyday tools that make your life easier and more enjoyable.",
    //images: "https://vancantgroup.com/images/meta.png",
  },
};

function UxUiDesign() {
  return (
    <>
      <InnerServicesHome />
      <Products title="HOT OFFERS" category="hot-offers" />
      <Products title="Home Decor" category="home-decor" />
      <Products title="Kitchen Tools" category="kitchen-tools" />
      <Products title="Office Supplies" category="office-supplies" />
      <Products title="Gardening Tools" category="gardening-tools" />
      <Products title="Toys and Game" category="toys-and-games" />
      <Products title="Personal Accessories" category="personal-accessories" />
      <RequestBlockServices />
      <ThanksPopup /> 
    </>
  );
}

export default UxUiDesign;
