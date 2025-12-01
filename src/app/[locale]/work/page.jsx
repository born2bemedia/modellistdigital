import React from "react";
import "@/styles/work.scss";
import WorkHero from "./_components/WorkHero";
import VideoProductionExamples from "./_components/VideoProductionExamples";
import OrderPopup from "@/components/OrderPopup";
import ThreeDModeling from "./_components/ThreeDModeling";
import UxUiExamples from "./_components/UxUiExamples";
import AnimationsExamples from "./_components/AnimationsExamples";
import RequestBlock from "@/components/RequestBlock";
import ThanksPopup from "@/components/ThanksPopup";

export const metadata = {
  title: "Our works",
  description:
    "Modellist Digital is a full-cycle digital production. Explore the examples of our works in video production, animations, UI/UX design and 3D modelling. Order similar works or get a quote for your idea!",
  openGraph: {
    title: "Our works",
    description:
      "Modellist Digital is a full-cycle digital production. Explore the examples of our works in video production, animations, UI/UX design and 3D modelling. Order similar works or get a quote for your idea!",
    images: "https://modellistdigital.com/images/meta.png",
  },
};

function WorkPage() {
  return (
    <>
      <WorkHero />
      <VideoProductionExamples />
      <ThreeDModeling />
      <UxUiExamples />
      <AnimationsExamples />
      <RequestBlock />
      <OrderPopup />
      <ThanksPopup />
    </>
  );
}

export default WorkPage;
