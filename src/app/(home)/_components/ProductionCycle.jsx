"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";

const ProductionCycle = () => {
  return (
    <section className="production-cycle">
      <div className="_container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          OUR PRODUCTION CYCLE
        </motion.h2>
        <motion.div
          className="production-cycle__body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <motion.div className="item">
              <span>01</span>
              <h3>
                Expert <br />
                consulting
              </h3>
              <p>
                We start by talking to you about your goals and vision. This
                ensures we're on the same page and can deliver what you're
                looking for.
              </p>
              <h4>
                You get a clear understanding and aligned expectations from the
                start.
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>02</span>
              <h3>
                Creative <br />
                strategy
              </h3>
              <p>
                We create a plan that outlines the concept, steps, and timeline.
                This keeps you informed about what we're doing and when.
              </p>
              <h4>
                You enjoy the clarity of the process and confidence in the plan.
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>03</span>
              <h3>
                Project
                <br />
                production
              </h3>
              <p>
                We take the idea and turn it into a video, animation, or model,
                bringing your vision to life.
              </p>
              <h4>You get a draft of your idea that you can try and review.</h4>
            </motion.div>
            <motion.div className="item">
              <span>04</span>
              <h3>
                Review and <br />
                optimisation
              </h3>
              <p>
                You give us feedback on the draft, and we make the necessary
                changes to get it just right.
              </p>
              <h4>
                You enjoy a final product that meets your needs and looks great.
              </h4>
            </motion.div>
            <motion.div className="item">
              <span>05</span>
              <h3>
                Launch and <br />
                distribution
              </h3>
              <p>
                We help you share your content in the best places to reach your
                audience.
              </p>
              <h4>
                Your video gets seen by the right people, maximising its impact.
              </h4>
            </motion.div>
          </div>
        </motion.div>

        <div className="production-cycle__ready">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            READY
            <br />
            TO START?
          </motion.h2>
          <Link className="black-button" href="/get-a-quote">
            Get a quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductionCycle;
