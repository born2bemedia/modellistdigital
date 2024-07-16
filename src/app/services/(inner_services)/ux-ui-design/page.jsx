import React from "react";
import "@/styles/services.scss";
import InnerServicesHome from "./_components/InnerServicesHome";
import PricingBlock from "./_components/PricingBlock";
import Customization from "./_components/Customization";
import Packages from "./_components/Packages";

export const metadata = {
  title: "UI/UX design",
  description:
    "Are you struggling to launch your project? Does your website look outdated and uncompetitive? We will create the best user experience in your project's intuitive and clear interface. Call us now!",
  openGraph: {
    title: "UI/UX design",
    description:
      "Are you struggling to launch your project? Does your website look outdated and uncompetitive? We will create the best user experience in your project's intuitive and clear interface. Call us now!",
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
    </>
  );
}

export default UxUiDesign;
