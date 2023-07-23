import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              totam qui voluptate similique quae et aliquam aliquid error. Natus
              nihil vero reiciendis accusamus voluptatem! Debitis provident
              quidem itaque ut eius.
            </p>

            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className=" fa fa-long-arrow-alt-right "></i>{" "}
              </button>

              <button className="primary-btn">
                VIEW COURSE <i className=" fa fa-long-arrow-alt-right "></i>{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
