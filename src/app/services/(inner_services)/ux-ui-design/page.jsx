import React from "react";
import "@/styles/services.scss";
import InnerServicesHome from "./_components/InnerServicesHome";
import PricingBlock from "./_components/PricingBlock";
import Customization from "./_components/Customization";
import Packages from "./_components/Packages";

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
