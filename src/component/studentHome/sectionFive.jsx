import React from 'react'
import Classes from '../classes/classes'


const sectionFive = () => {
  return (
    <article className="section-five">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <p>Browse Classes</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes-box week ">
                <div> <p>Next Week</p> </div>
                <div> <p>Morning</p> </div>
                <div> <p>Afternoon</p> </div>
                <div> <p>Evening</p> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes-box month">
                <div> <p>Next Week</p> </div>
                <div> <p>Morning</p> </div>
                <div> <p>Afternoon</p> </div>
                <div> <p>Evening</p> </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="classes-box semestr">
                <div> <p>Next Week</p> </div>
                <div> <p>Morning</p> </div>
                <div> <p>Afternoon</p> </div>
                <div> <p>Evening</p> </div>
              </div>
            </div>
            <Classes />
          </div>
        </div>
      </div>
    </article>
  )
}

export default sectionFive