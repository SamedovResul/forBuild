import React, { useState   } from "react";
import ScrollTriger from "react-scroll-trigger";
// import Slider from "react-slick";
import Slider from '../slider/slider';

const SectionTwo = () => {
  const [number, setNumber] = useState(false);
  
  return (
    <ScrollTriger
      onEnter={() => setNumber(true)}
      onExit={() => setNumber(false)}
    >
      <article className="section-two">

        <div className="container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 ">
                <div className="text-div">
                  <p> Unlock your kids's potential </p>
                  <p>
                    We give kids 3–18 a place to build their own curriculum of
                    interactive,
                    <br /> one-of-a-kind classes.
                  </p>
                </div>
              </div>

              <Slider />
            </div>
          </div>
        </div>
      </article>
    </ScrollTriger>
  );
};

export default SectionTwo;
