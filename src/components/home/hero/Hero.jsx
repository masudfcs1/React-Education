import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACDAEMIA"
              title="BEST ONLINE EDUCATION"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              totam qui voluptate similique quae et aliquam aliquid error. Natus
              nihil vero reiciendis accusamus.
            </p>

            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className=" fa fa-long-arrow-alt-right "></i>{" "}
              </button>

              <button>
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
