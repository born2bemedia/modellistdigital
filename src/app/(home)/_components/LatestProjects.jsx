"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";
import VideoProduction from "./Projects/VideoProduction";
import Modelling from "./Projects/Modelling";
import UxUiDesign from "./Projects/UxUiDesign";
import Animations from "./Projects/Animations";
import TabArrow from "@/icons/TabArrow";

const LatestProjects = () => {
  const [activeTab, setActiveTab] = useState("video");

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="latest-projects">
      <div className="_container">
        <div className="latest-projects__body">
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp}>
            CHECK OUT OUR LATEST PROJECTS
          </motion.h2>

          <div className="tabs">
            <div className="tabs-nav">
              <button
                onClick={() => tabChange("video")}
                className={`${activeTab == "video" ? "active" : ""}`}
              >
                <span>Video production</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("3d")}
                className={`${activeTab == "3d" ? "active" : ""}`}
              >
                <span>3D modelling</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("ux-ui")}
                className={`${activeTab == "ux-ui" ? "active" : ""}`}
              >
                <span>UX/UI design</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("animations")}
                className={`${activeTab == "animations" ? "active" : ""}`}
              >
                <span>Animations</span>
                <TabArrow />
              </button>
            </div>

            <div className="tabs-content">
              {activeTab == "video" && <VideoProduction />}
              {activeTab == "3d" && <Modelling />}
              {activeTab == "ux-ui" && <UxUiDesign />}
              {activeTab == "animations" && <Animations />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
