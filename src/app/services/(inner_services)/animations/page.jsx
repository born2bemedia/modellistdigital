import React from "react";
import "@/styles/services.scss";
import InnerServicesHome from "./_components/InnerServicesHome";
import PricingBlock from "./_components/PricingBlock";
import Customization from "./_components/Customization";
import Packages from "./_components/Packages";
import MonthlyPackage from "./_components/MonthlyPackage";
import Examples from "./_components/Examples";

export const metadata = {
  title: "Animations",
  description:
    "Explore our animation development services. Modellist Digital offers tailored solutions and service packages to cover your design needs. Contact us today!",
  openGraph: {
    title: "Animations",
    description:
      "Explore our animation development services. Modellist Digital offers tailored solutions and service packages to cover your design needs. Contact us today!",
    //images: "https://vancantgroup.com/images/meta.png",
  },
};

function UxUiDesign() {
  return (
    <>
      <InnerServicesHome />
      <PricingBlock />
      <Customization />
      <Packages />
      <MonthlyPackage />
      <Examples />
    </>
  );
}

export default UxUiDesign;
