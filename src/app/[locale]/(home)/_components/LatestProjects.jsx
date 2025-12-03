"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import VideoProduction from "./Projects/VideoProduction";
import Modelling from "./Projects/Modelling";
import UxUiDesign from "./Projects/UxUiDesign";
import Animations from "./Projects/Animations";
import TabArrow from "@/icons/TabArrow";
import { useTranslations } from "next-intl";

const LatestProjects = () => {
  const [activeTab, setActiveTab] = useState("video");

  const t = useTranslations('home.latestProjects');

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="latest-projects">
      <div className="_container">
        <div className="latest-projects__body">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {t('title', {fallback: 'CHECK OUT OUR LATEST PROJECTS'})}
          </motion.h2>
          <div className="tabs">
            <div className="tabs-nav">
              <button
                onClick={() => tabChange("video")}
                className={`${activeTab == "video" ? "active" : ""}`}
              >
                <span>{t('buttons.0', {fallback: 'Video production'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("3d")}
                className={`${activeTab == "3d" ? "active" : ""}`}
              >
                <span>{t('buttons.1', {fallback: '3D modelling'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("ux-ui")}
                className={`${activeTab == "ux-ui" ? "active" : ""}`}
              >
                <span>{t('buttons.2', {fallback: 'UX/UI design'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("animations")}
                className={`${activeTab == "animations" ? "active" : ""}`}
              >
                <span>{t('buttons.3', {fallback: 'Animations'})}</span>
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
