import React,{useState} from "react";
import img1 from '../metaImg/Img1.png'
import img2 from '../metaImg/Img2.png'
import img3 from '../metaImg/Img3.png'

const SectionSeven = () => {

  const [className, setclassName] = useState(10)



  return (
    <section className="section-eight">
      <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-container">
                <h4>
                  Outschool in action
                </h4>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-box">
                <div 
                  className={ className === 10 ? "active":"inactive"}
                  onClick={() => className !== 10 && setclassName(10) } >
                  <div>
                    <p>Preview a class</p>
                  </div>
                  <div>
                    <p>Outschool teacher, Tammy, sparks creativity in the classroom during a live video class.</p>
                  </div>
                </div>
                <div 
                  className={ className === 9 ? "active":"inactive"}
                  onClick={() => className !== 9 && setclassName(9) } 
                  >
                  <div>
                    <p>Preview a class</p>
                  </div>
                  <div>
                    <p>Outschool teacher, Tammy, sparks creativity in the classroom during a live video class.</p>
                  </div>
                </div>
                <div 
                  className={ className === 8 ? "active":"inactive"}
                  onClick={() => className !== 8 && setclassName(8) } 
                  >
                  <div>
                    <p>Preview a class</p>
                  </div>
                  <div>
                    <p>Outschool teacher, Tammy, sparks creativity in the classroom during a live video class.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box">
                {
                  className === 10 && (
                    <img src={img1} alt="" />
                  )
                }
                {
                  className === 9 && (
                    <img src={img2} alt="" />
                  )
                }
                  {
                  className === 8 && (
                    <img src={img3} alt="" />
                  )
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="text-box">
                <h3>Avaliable on</h3>
              </div>
            </div>
              {
                imgs.map((data, i) =>{
                  const {img} = data
                  return(
                    <div key={i} className="col-md-4 col-sm-4 col-4">
                      <div className="box">
                        <img src={img} alt="metatesk" />
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default SectionSeven;
