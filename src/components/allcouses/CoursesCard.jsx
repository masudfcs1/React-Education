import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css";
const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((d) => (
            <div className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={d.cover} alt="" />
                  </div>
                </div>
              </div>
              <div className="text">
                <h1> {d.coursesName} </h1>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label htmlFor="">(5.0)</label>
                </div>
                <div className="details">
                  {d.courTeacher.map((details) => (
                    <div className="box">
                      <div className="dimg">
                        <img src={details.dcover} alt="" />
                      </div>
                      <div className="para">
                        <h4> {details.name} </h4>
                      </div>

                      <span> {details.totalTime}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="price">
                <h3>
                  {" "}
                  {d.priceAll}/{d.pricePer}{" "}
                </h3>
              </div>
              <button className="outline-btn">Enroll Now</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
