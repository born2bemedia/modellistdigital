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
