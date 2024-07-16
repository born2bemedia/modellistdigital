"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import TabArrow from "@/icons/TabArrow";
import TeamIcon from "@/icons/TeamIcon";

const Team = () => {
  const [activeTab, setActiveTab] = useState("tab1");

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
                <span>The Visionaries</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab2")}
                className={`${activeTab == "tab2" ? "active" : ""}`}
              >
                <span>The Connectors</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab3")}
                className={`${activeTab == "tab3" ? "active" : ""}`}
              >
                <span>The Perfectionists</span>
                <TabArrow />
              </button>
              <button
                onClick={() => tabChange("tab4")}
                className={`${activeTab == "tab4" ? "active" : ""}`}
              >
                <span>The Makers</span>
                <TabArrow />
              </button>
            </div>

            <div className="tabs-content">
              {activeTab == "tab1" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Creative Director</span>
                    </h3>
                    <p>
                      The driving force behind the innovative concepts and
                      designs we produce. They ensure that every project,
                      whether it's a 3D model, video production, animation, or
                      UX/UI design, is both functional and aesthetically
                      captivating, pushing the boundaries of creativity.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Lead Designer</span>
                    </h3>
                    <p>
                      Translates ideas into visual masterpieces. They oversee
                      the design process, ensuring that each creation meets our
                      high standards and aligns with your vision.
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab2" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Marketing Strategist</span>
                    </h3>
                    <p>
                      Crafts compelling stories around our creations, showcasing
                      their unique value and potential. They connect our
                      products with the right audience, ensuring our models,
                      videos, animations, and designs make a lasting impact.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Customer Experience Manager</span>
                    </h3>
                    <p>
                      Dedicated to providing top-notch service. They guide you
                      through the process, ensuring your needs are met and your
                      expectations exceeded.
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab3" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Quality Assurance Specialist</span>
                    </h3>
                    <p>
                      Meticulously reviews every project to ensure it meets our
                      rigorous quality standards. They are the guardians of
                      precision and detail, making sure that each creation is
                      flawless and ready for presentation.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Technical Lead</span>
                    </h3>
                    <p>
                      Ensures that all our models and animations are technically
                      sound and optimised for their respective platforms. They
                      tackle the complexities of construction and production,
                      ensuring durability and functionality.
                    </p>
                  </div>
                </div>
              )}
              {activeTab == "tab4" && (
                <div className="tab-inner">
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>3D Modeler</span>
                    </h3>
                    <p>
                      Brings ideas to life with their expert skills in creating
                      detailed and accurate 3D models.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Animator </span>
                    </h3>
                    <p>
                      Brings motion to our creative projects, crafting fluid and
                      engaging animations that capture the essence of your
                      vision.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>Video Producer </span>
                    </h3>
                    <p>
                      Oversees the creation of video content from start to
                      finish.
                    </p>
                  </div>
                  <div>
                    <h3>
                      <TeamIcon />
                      <span>UX/UI Designer</span>
                    </h3>
                    <p>
                      Ensures that all our digital products are user-friendly
                      and visually appealing.
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
