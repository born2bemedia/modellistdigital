"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import TabArrow from "@/icons/TabArrow";
import TeamIcon from "@/icons/TeamIcon";
import { useTranslations } from "next-intl";

const Team = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const t = useTranslations('team.team');

  const tabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <section className="team-wrap">
      <div className="_container">
        <div className="team-wrap__body">

          <div className="tabs">
            <div className="tabs-nav">
              <button
                onClick={() => tabChange("tab1")}
                className={`${activeTab == "tab1" ? "active" : ""}`}
              >
                <span>{t('tabs.0', {fallback: 'The Visionaries'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab2")}
                className={`${activeTab == "tab2" ? "active" : ""}`}
              >
                <span>{t('tabs.1', {fallback: 'The Connectors'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab3")}
                className={`${activeTab == "tab3" ? "active" : ""}`}
              >
                <span>{t('tabs.2', {fallback: 'The Perfectionists'})}</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab4")}
                className={`${activeTab == "tab4" ? "active" : ""}`}
              >
                <span>{t('tabs.3', {fallback: 'The Makers'})}</span>
                <TabArrow />
              </button>
            </div>

            <div className="tabs-content">
              {activeTab == "tab1" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab1.title1', {fallback: 'Creative Director'})}</span>
                    </h3>
                    <p>
                      {t('tab1.description1', {fallback: 'The driving force behind the innovative concepts and designs we produce. They ensure that every project, whether it\'s a 3D model, video production, animation, or UX/UI design, is both functional and aesthetically captivating, pushing the boundaries of creativity.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab1.title2', {fallback: 'Lead Designer'})}</span>
                    </h3>
                    <p>
                      {t('tab1.description2', {fallback: 'Translates ideas into visual masterpieces. They oversee the design process, ensuring that each creation meets our high standards and aligns with your vision.'})}
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab2" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab2.title1', {fallback: 'Marketing Strategist'})}</span>
                    </h3>
                    <p>
                      {t('tab2.description1', {fallback: 'Crafts compelling stories around our creations, showcasing their unique value and potential. They connect our products with the right audience, ensuring our models, videos, animations, and designs make a lasting impact.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab2.title2', {fallback: 'Customer Experience Manager'})}</span>
                    </h3>
                    <p>
                      {t('tab2.description2', {fallback: 'Dedicated to providing top-notch service. They guide you through the process, ensuring your needs are met and your expectations exceeded.'})}
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab3" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab3.title1', {fallback: 'Quality Assurance Specialist'})}</span>
                    </h3>
                    <p>
                      {t('tab3.description1', {fallback: 'Meticulously reviews every project to ensure it meets our rigorous quality standards. They are the guardians of precision and detail, making sure that each creation is flawless and ready for presentation.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab3.title2', {fallback: 'Technical Lead'})}</span>
                    </h3>
                    <p>
                      {t('tab3.description2', {fallback: 'Ensures that all our models and animations are technically sound and optimised for their respective platforms. They tackle the complexities of construction and production, ensuring durability and functionality.'})}
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab4" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab4.title1', {fallback: '3D Modeler'})}</span>
                    </h3>
                    <p>
                      {t('tab4.description1', {fallback: 'Brings ideas to life with their expert skills in creating detailed and accurate 3D models.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab4.title2', {fallback: 'Animator'})}</span>
                    </h3>
                    <p>
                      {t('tab4.description2', {fallback: 'Brings motion to our creative projects, crafting fluid and engaging animations that capture the essence of your vision.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab4.title3', {fallback: 'Video Producer'})}</span>
                    </h3>
                    <p>
                      {t('tab4.description3', {fallback: 'Oversees the creation of video content from start to finish.'})}
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>{t('tab4.title4', {fallback: 'UX/UI Designer'})}</span>
                    </h3>
                    <p>
                      {t('tab4.description4', {fallback: 'Ensures that all our digital products are user-friendly and visually appealing.'})}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
