import React, { useState   } from "react";
// import VideoPlayer from "react-video-js-player";
import ScrollTriger from "react-scroll-trigger";
// import img1 from "./metaImg/book.png";
// import poster from "./metaImg/poster.png";
import Slider from "react-slick";

const SectionTwo = () => {
  const [number, setNumber] = useState(false);
  const array = [1, 2, 3, 4, 5, 7, 8, 9,]
  const [rightSliderClass, setrightSliderClass] = useState('');
  const [lefttSliderClass, setlefttSliderClass] = useState('left-side');

     
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    beforeChange: (current, next) => {
      if(next > 0 && !rightSliderClass){
        setrightSliderClass('right-side')
      }
      if(next === 0 && rightSliderClass){
        setrightSliderClass('')
        console.log(true)
      }

      if(array.length - 4 === next){
        setlefttSliderClass('')
      }else if(array.length - 4 !== next){
        setlefttSliderClass('left-side')
      }

    },
  };
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
                  <p>Discover a world of endless learning possibilities</p>
                  <p>
                    We give kids 3–18 a place to build their own curriculum of
                    interactive,
                    <br /> one-of-a-kind classes.
                  </p>
                </div>
              </div>


              <div className="col-md-12 slider-div">
                <div className={rightSliderClass}>

                </div>
                <Slider {...settings}  >
                {array.map(index => (
                       <div key={index} className="slide-div">
                       <div >
                         <div className="top-div">
                           <img
                             src="https://process.filepicker.io/APHE465sSbqvbOIStdwTyz/rotate=deg:exif/resize=fit:crop,height:140,width:240/output=quality:80,compress:true,strip:true,format:jpg/cache=expiry:max/https://cdn.filestackcontent.com/uxkppTQSTROb91QPTjRT"
                             alt=""
                           />
                         </div>
                         <div className="bottom-div">
                           <p> Lorem ipsum dolor sit. </p>
                           <button>Davamı</button>
                         </div>
                       </div>
                     </div>
                  ))}
                 
                </Slider>
                <div className={lefttSliderClass}>

                </div>
              </div>

            </div>
          </div>
        </div>
      </article>
    </ScrollTriger>
  );
};

export default SectionTwo;
