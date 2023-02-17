import React from "react";
// import img1 from "./metaImg/image1.png";
// import img2 from "./metaImg/image2.png";
// import img3 from "./metaImg/image3.png";
// import { useSpring, animated } from "react-spring";

const SectionTwo = () => {
  

  return (
    <article className="section-three">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="center-container">
                <div className="left">

                </div>
                <div className="right">
                  <p>Frustrated by a one-size-fits-all education?</p>
                  <p>No contracts, sales calls, or upfront payments. Vetted educators with thousands of 5-star reviews.</p>
                  <button>
                    Explore Tutors
                  </button>
                </div>
              </div>
            </div>
            {/* {imgs.map((data, i) => {
              const { img } = data;
              return (
                <div key={i} className="col-md-4 ">
                  <div className="metatesk-box ">
                    <div className="img-div">
                      <img src={img} alt="" />
                    </div>
                    <p>Anytime, Anywhere</p>
                    <p>join the classes</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SectionTwo;
