import React from 'react';
import SliderComponent from '../slider/slider';


const SliderSection = ({text}) => {
  return (
    <article className="slider-section">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <p>{text}</p>
              </div>
            </div>
            <SliderComponent/>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SliderSection