import React from "react";
import { awrapper } from "../../dummydata";

const AWrapper = () => {
  return (
    <>
      <section className=" awrapper">
        <div className="container grid">
          {awrapper.map((d) => (
            <div className="box flex">
              <div className="img">
                <img src={d.cover} alt="" />
              </div>
              <div className="text">
                <h1>{d.data} </h1>
                <h3>{d.title} </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AWrapper;
