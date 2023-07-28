import React from "react";
import Title from "../common/title/Title";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Title subtitle="COURSES" title="Browser Our Online Courses" />

          <div className="content grid3">
            {online.map((d) => (
              <div className="box">
                <div className="img">
                  <img src={d.cover} alt="" />
                  <img src={d.hoverCover} alt="" className="show" />
                </div>
                <h1> {d.courseName} </h1>
                <span> {d.course} </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
