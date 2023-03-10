import React from 'react';
import Classes from '../classes/classes';


const SectionFive = () => {
  return (
    <article className='section-five'>
      <div  className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h5> Classes by subject </h5>
              </div>
            </div>
            <Classes />
          </div>
        </div>
      </div>
    </article>
  )
}

export default SectionFive