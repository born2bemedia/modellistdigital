import React from "react";
import "@/styles/services.scss";
import InnerServicesHome from "./_components/InnerServicesHome";
import PricingBlock from "./_components/PricingBlock";
import Customization from "./_components/Customization";
import Packages from "./_components/Packages";
import MonthlyPackage from "./_components/MonthlyPackage";
import Examples from "./_components/Examples";

export const metadata = {
  title: "Video production",
  description:
    "Explore our video production services and solutions. Modellist Digital offers flexible options and packages, including a retainer service. Get expert assistance in video production.",
  openGraph: {
    title: "Video production",
    description:
      "Explore our video production services and solutions. Modellist Digital offers flexible options and packages, including a retainer service. Get expert assistance in video production.",
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
