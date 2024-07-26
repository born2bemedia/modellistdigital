import React from "react";
import Link from "next/link";
import VideoBlock from "./VideoBlock";
import Products from "../../3d-modeling/_components/Products";

const Examples = () => {
  return (
    <section className="examples">
      <div className="_container">
        <div className="title">
          <img src="/images/work/AnimationsIcon.svg" />
          <Link href="#">
            <span>
              READY-MADE <br />
              ANIMATIONS
            </span>
          </Link>
        </div>
        <div className="examples__body">
          <Products category="ready-made-animations" />
        </div>
      </div>
    </section>
  );
};

export default Examples;
