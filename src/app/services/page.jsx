import React from "react";
import "@/styles/services.scss";
import ServicesHome from "./_components/ServicesHome";
import RequestBlock from "@/components/RequestBlock";
import ThanksPopup from "@/components/ThanksPopup";
import VideoProduction from "./_components/VideoProduction";
import ThreeDModeling from "./_components/ThreeDModeling";
import UxUiDesign from "./_components/UxUiDesign";
import Animations from "./_components/Animations";

function ServicesPage() {
  return (
    <>
      <ServicesHome />
      <VideoProduction />
      <ThreeDModeling />
      <UxUiDesign />
      <Animations />
      <RequestBlock />
      <ThanksPopup />
    </>
  );
}

export default ServicesPage;
