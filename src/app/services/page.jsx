import React from "react";
import "@/styles/services.scss";
import ServicesHome from "./_components/ServicesHome";
import RequestBlock from "@/components/RequestBlock";
import ThanksPopup from "@/components/ThanksPopup";
import VideoProduction from "./_components/VideoProduction";
import ThreeDModeling from "./_components/ThreeDModeling";
import UxUiDesign from "./_components/UxUiDesign";
import Animations from "./_components/Animations";

export const metadata = {
  title: "Digital production services",
  description:
    "Explore our digital production services and choose the one best fits your ideas. Discover tailored video production solutions, animations, UI/UX design, and ready-made 3D models. Order now.",
  openGraph: {
    title: "Digital production services",
    description:
      "Explore our digital production services and choose the one best fits your ideas. Discover tailored video production solutions, animations, UI/UX design, and ready-made 3D models. Order now.",
    //images: "https://vancantgroup.com/images/meta.png",
  },
};

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
